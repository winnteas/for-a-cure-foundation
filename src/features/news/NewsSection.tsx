import React, { useEffect, useState } from 'react';
import styles from './NewsSection.module.css';
import Button from '../../components/Button';
import NewsCard from '../../components/NewsCard';
import { Link } from 'react-router-dom';

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

interface NewsItem {
  id?: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  image: string;
}

const NewsSection: React.FC = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/news`);
        if (!res.ok) throw new Error('Failed to load news');
        const data = await res.json();
        if (mounted) setItems(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching news:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchNews();
    return () => { mounted = false; };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className="sectionTitle largeText">Our Latest News</h2>

        {loading && (
          <div className={styles.loadingMessage}>
            <div className={styles.spinner}></div>
            <span>Loading news...</span>
          </div>
        )}
        {error && <div className={styles.errorMessage}>Error: {error}</div>}

        {!loading && !error && (
          <div className={styles.newsContainer}>
            {items.slice(0, 3).map((item, idx) => (
              <NewsCard
                key={item.id || idx}
                title={item.title}
                date={item.date}
                desc={item.desc}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/news">
            <Button variant="primary">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;