import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../features/news/NewsSection.module.css';
import adminStyles from './News.module.css';
import EditableNewsCard from '../../../components/EditableNewsCard';

interface NewsItem {
  id?: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  categoryType: 'categories' | 'donate' | 'events';
  image: string;
}

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/news`, {
          credentials: 'include', // sends the httpOnly cookie
        });
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleEdit = (id?: string) => {
    console.log('Edit news item:', id);
    // TODO: Implement edit functionality
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;

    try {
        const response = await fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        });

        if (!response.ok) throw new Error('Failed to delete article');

        setNewsItems(newsItems.filter((item) => item.id !== id));
    } catch (err) {
        console.error('Error deleting news item:', err);
    }
    };
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className="sectionTitle largeText">Admin News Management</h2>

        {loading && <div className={adminStyles.loadingMessage}>Loading news...</div>}
        {error && <div className={adminStyles.errorMessage}>Error: {error}</div>}

        {!loading && !error && (
          <div className={styles.newsContainer}>
            {newsItems.map((item, index) => (
              <EditableNewsCard
                key={item.id || index}
                id={item.id}
                title={item.title}
                date={item.date}
                desc={item.desc}
                category={item.category}
                categoryType={item.categoryType}
                image={item.image}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {!loading && !error && newsItems.length === 0 && (
          <div className={adminStyles.emptyContainer}>
            <div className={adminStyles.emptyMessage}>No news items found.</div>
            <Link to="/admin/news/add-news" className={adminStyles.addButton}>
              Add Article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;