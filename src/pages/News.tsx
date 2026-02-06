import React from 'react';
import styles from './News.module.css';
import PageTitleSection from '../components/PageTitleSection';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import thumb1 from '../assets/news-thumbnails/news-thumbnail1.svg';
import thumb2 from '../assets/news-thumbnails/news-thumbnail2.svg';
import thumb3 from '../assets/news-thumbnails/news-thumbnail-3.svg';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const cards = [
  { title: 'Stem cells: What they are and what they do', date: 'Jun 08,2025', desc: '', category: 'Categories', categoryType: 'categories' as const, image: thumb1 },
  { title: 'The Gift of Giving: Why Donating Feels So Good', date: 'Jun 08,2025', desc: '', category: 'Donate', categoryType: 'donate' as const, image: thumb2 },
  { title: 'Get involved: Make an Impact', date: 'Jun 08,2025', desc: '', category: 'Events', categoryType: 'events' as const, image: thumb3 },
  { title: 'The Power of Volunteering: Why Giving Your Time Matters', date: 'Jun 08,2025', desc: '', category: 'Categories', categoryType: 'categories' as const, image: thumb1 },
  { title: 'From Research to Reality: How Science Becomes a Cure', date: 'Jun 08,2025', desc: '', category: 'Donate', categoryType: 'donate' as const, image: thumb2 },
  { title: 'United for a Cure: The Strength of Community Support', date: 'Jun 08,2025', desc: '', category: 'Events', categoryType: 'events' as const, image: thumb3 },
];

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'News', link: ''},
]

const NewsListPage: React.FC = () => (
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

      <div className={styles.grid}>
        {cards.map((c, i) => (
          <NewsCard key={i} title={c.title} date={c.date} desc={c.desc} category={c.category} categoryType={c.categoryType} image={c.image} />
        ))}
      </div>

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

export default NewsListPage; 