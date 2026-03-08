import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './FullNewsArticle.module.css';
import NewsCard from '../components/NewsCard';

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

interface NewsItem {
  id: string;
  title: string;
  author?: string;
  date: string;
  description?: string;
  desc?: string;
  category: string;
  image: string;
  slug: string;
}

const FullNewsArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [article, setArticle] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError('Missing article identifier');
      setLoading(false);
      return;
    }

    const fetchArticleAndRelated = async () => {
      try {
        setLoading(true);

        // First, find the article by slug from the list
        const listRes = await fetch(`${API_URL}/news`);
        if (!listRes.ok) throw new Error('Failed to load articles');
        const listData: NewsItem[] = await listRes.json();

        const found = listData.find((item) => item.slug === slug);
        if (!found) {
          throw new Error('Article not found');
        }

        // Then, fetch the full article via /news/:id as requested
        const articleRes = await fetch(`${API_URL}/news/${found.id}`);
        if (!articleRes.ok) throw new Error('Failed to load article');
        const articleData: NewsItem = await articleRes.json();
        setArticle(articleData);

        // Fetch related articles by category
        await fetchRelated(articleData.category, articleData.id);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    async function fetchRelated(category: string, excludeId: string) {
      try {
        setRelatedLoading(true);
        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (excludeId) params.append('excludeId', excludeId);
        console.log("params", params.toString());

        const res = await fetch(`${API_URL}/news/related?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to load related articles');
        const data: NewsItem[] = await res.json();
        console.log(data);
        setRelated(data || []);
      } catch (err) {
        console.error('Error fetching related articles:', err);
      } finally {
        setRelatedLoading(false);
      }
    }

    fetchArticleAndRelated();
  }, [slug]);

  const description = (article?.description || article?.desc || '').trim();
  const descriptionParagraphs = description
    ? description.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)
    : [];

  if (loading) {
    return (
      <div className={styles.root}>
        <div className={styles.loading}>Loading news article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className={styles.root}>
        <div className={styles.articleSection}>
          <div className={styles.articleContainer}>
            <div className={styles.articleContent}>
              <div className={styles.articleText}>
                {error || 'Article not found.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.categoryTag}>{article.category}</div>
          <h1 className={styles.mainTitle}>{article.title}</h1>
          {article.author && (
            <p className={styles.subtitle}>By {article.author}</p>
          )}
          <div className={styles.date}>{article.date}</div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImage}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.heroPhoto}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Area */}
      <div className={styles.articleSection}>
        <div className={styles.articleContainer}>
          <div className={styles.articleContent}>
            <div className={styles.articleText}>
              {descriptionParagraphs.length > 0 ? (
                descriptionParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              ) : (
                <p>No content available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <h2 className={styles.relatedTitle}>YOU MAY ALSO LIKE</h2>
          {relatedLoading && (
            <div className={styles.loading}>Loading news...</div>
          )}
          {!relatedLoading && related.length > 0 && (
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  desc={item.desc || item.description || ''}
                  category={item.category}
                  image={item.image}
                  slug={item.slug}
                />
              ))}
            </div>
          )}
          {!relatedLoading && related.length === 0 && (
            <div className={styles.loading}>No other articles.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullNewsArticle;