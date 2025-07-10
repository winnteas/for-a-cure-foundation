import React from 'react';
import styles from './NewsSection.module.css';
import Button from '../../components/Button';

interface NewsItem {
  title: string;
  date: string;
  desc: string;
}

const news: NewsItem[] = [
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jan 08, 2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.'
  },
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jan 08, 2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.'
  },
  {
    title: 'Stem cells: What they are and what they do',
    date: 'Jan 08, 2025',
    desc: 'Learn about the basics of stem cells and their potential in medical research.'
  }
];

const NewsSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Latest News</h2>
      <div className={styles.newsContainer}>
        {news.map((item, idx) => (
          <div key={idx} className={styles.newsCard}>
            <div className={styles.newsImage}></div>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsDescription}>{item.desc}</p>
              <div className={styles.newsDate}>{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline">View All</Button>
    </div>
  </section>
);

export default NewsSection; 