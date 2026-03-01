import React from 'react';
import styles from './NewsSection.module.css';
import Button from '../../components/Button';
import newsThumbnail1 from '../../assets/news-thumbnails/news-thumbnail1.svg';
import newsThumbnail2 from '../../assets/news-thumbnails/news-thumbnail2.svg';
import newsThumbnail3 from '../../assets/news-thumbnails/news-thumbnail-3.svg';
import NewsCard from '../../components/NewsCard';
import { Link } from 'react-router-dom';

interface NewsItem {
  title: string;
  date: string;
  desc: string;
  category: string;
  image: string;
}

const news: NewsItem[] = [
  {
    title: 'Stem Cells: What They Are and What They Do',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Categories',
    image: newsThumbnail1
  },
  {
    title: 'The Gift of Giving: Why Donating Feels so Good',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Donate',
    image: newsThumbnail2
  },
  {
    title: 'Get Involved: Make an Impact',
    date: 'Jun 08,2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.',
    category: 'Events',
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
        <Link to="/news">
         <Button variant="primary">View All</Button>
      </Link>
      </div>
    </div>
  </section>
);

export default NewsSection; 