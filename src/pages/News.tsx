import React, { useEffect, useState } from 'react';
import styles from './News.module.css';
import PageTitleSection from '../components/PageTitleSection';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const API_URL = 'https://for-a-cure-foundation-backend.onrender.com';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  desc: string;
  category: string;
  image: string;
  slug: string;
}

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'News', link: ''},
]

const NewsListPage: React.FC = () => {
  const [cards, setCards] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCards = filteredCards.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className={styles.root}>
      <PageTitleSection title="News" />
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Stories Of Impact</h2>
          <p className={styles.subtitle}>Stay informed with updates, milestones, and moments of impact from our research and community work.</p>
        </div>

        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {loading && <div className={styles.loading}>Loading news...</div>}
        {error && <div className={styles.error}>Error: {error}</div>}

        {!loading && !error && (
          <>
            {paginatedCards.length > 0 ? (
              <div className={styles.grid}>
                {paginatedCards.map((c, i) => (
                  <NewsCard
                    key={c.id || i}
                    id={c.id}
                    title={c.title}
                    date={c.date}
                    desc={c.desc}
                    category={c.category}
                    image={c.image}
                    slug={c.slug}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>No articles found matching your search.</div>
            )}
          </>
        )}

        {!loading && !error && filteredCards.length > 0 && (
          <div className={styles.pagination}>
            {currentPage > 1 && (
              <button
                className={styles.pageBtn}
                onClick={handlePrevPage}
              >
                {'<'}
              </button>
            )}
            {getPageNumbers().map(page => (
              <button
                key={page}
                className={styles.pageBtn + (currentPage === page ? ' ' + styles.active : '')}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                className={styles.pageBtn}
                onClick={handleNextPage}
              >
                {'>'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListPage; 