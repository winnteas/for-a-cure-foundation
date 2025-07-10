import React from 'react';
import styles from './NewsSection.module.css';
import Button from '../../components/Button';
import newsThumbnail1 from '../../assets/news-thumbnails/news-thumbnail1.svg';
import newsThumbnail2 from '../../assets/news-thumbnails/news-thumbnail2.svg';
import newsThumbnail3 from '../../assets/news-thumbnails/news-thumbnail-3.svg';
import NewsCard from '../../components/NewsCard';

interface NewsItem {
  title: string;
  date: string;
  desc: string;
  category: string;
  categoryType: 'categoria' | 'donate' | 'event';
  image: string;
}

const news: NewsItem[] = [
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Categoria',
    categoryType: 'categoria',
    image: newsThumbnail1
  },
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Donate',
    categoryType: 'donate',
    image: newsThumbnail2
  },
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Event',
    categoryType: 'event',
    image: newsThumbnail3
  }
];

const NewsSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className="sectionTitle largeText">Our Latest News</h2>
      <div className={styles.newsContainer}>
        {news.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary">View All</Button>
      </div>
    </div>
  </section>
);

export default NewsSection; 