import React, { useEffect, useState } from 'react';
import styles from './News.module.css';
import PageTitleSection from '../components/PageTitleSection';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

interface NewsItem {
  id?: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  image: string;
}

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'News', link: ''},
]

const NewsListPage: React.FC = () => {
  const [cards, setCards] = useState<NewsItem[]>([]);
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
        if (mounted) setCards(data || []);
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
    <div className={styles.root}>
      <PageTitleSection title="News" />
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>

      <div className={styles.container}>
        <h1 className={styles.construction}>Under Construction  - Stay informed with updates, milestones, and moments of impact from our research and community work.</h1>

        <div className={styles.header}>
          <h2 className={styles.title}>Stories Of Impact</h2>
          <p className={styles.subtitle}>Stay informed with updates, milestones, and moments of impact from our research and community work.</p>
        </div>

        <div className={styles.searchRow}>
          <input className={styles.searchInput} placeholder="Search" />
        </div>

        {loading && <div className={styles.loading}>Loading news...</div>}
        {error && <div className={styles.error}>Error: {error}</div>}

        {!loading && !error && (
          <div className={styles.grid}>
            {cards.map((c, i) => (
              <NewsCard key={c.id || i} title={c.title} date={c.date} desc={c.desc} category={c.category} image={c.image} />
            ))}
          </div>
        )}

        <div className={styles.pagination}>
          <button className={styles.pageBtn}>{'<'}</button>
          <button className={styles.pageBtn + ' ' + styles.active}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <button className={styles.pageBtn}>{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default NewsListPage; 