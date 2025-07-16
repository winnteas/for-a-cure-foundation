import React from 'react';
import externalLinkIcon from '../assets/icons/external-link.svg';
import styles from '../features/news/NewsSection.module.css';

interface NewsCardProps {
  title: string;
  date: string;
  desc: string;
  category: string;
  categoryType: 'categoria' | 'donate' | 'event';
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, desc, category, categoryType, image }) => (
  <div className={styles.newsCard}>
    <div className={styles.newsImageWrapper}>
      <img src={image} className={styles.newsImage} alt={title} />
    </div>
    <span className={styles['categoryLabel'] + ' ' + styles[categoryType]}>{category}</span>
    <div className={styles.newsContent}>
      <h3 className={styles.newsTitle}>{title}</h3>
      <div className={styles.newsBottomRow}>
        <span className={styles.newsDateRow}>
          <span className={styles.calendarIcon}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          </span>
          <span className={styles.newsDate}>{date}</span>
        </span>
        <a href="#" className={styles.readMore}>
          Read More <img src={externalLinkIcon} alt="external link" className={styles.externalLinkIcon} />
        </a>
      </div>
    </div>
  </div>
);

export default NewsCard; 