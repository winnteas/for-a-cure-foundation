import React from 'react';
import styles from './ImpactStats.module.css';

interface Stat {
  label: string;
  value: string;
  desc: string;
}

const stats: Stat[] = [
  { label: 'Research Projects', value: '120+', desc: 'Supported across institutions worldwide.' },
  { label: 'Clinical Trials', value: '30+', desc: 'Accelerating therapies from the lab to the clinic.' },
  { label: 'Researchers Funded', value: '50+', desc: 'Leading scientists working on stem cell research.' },
  { label: 'Raised', value: '$15M+', desc: 'Funds invested directly into research.' },
  { label: 'Donors', value: '5,000+', desc: 'Individuals and organizations funding a cure.' }
];

const ImpactStats: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Your Contribution Makes All The Difference</h2>
      <div className={styles.statsContainer}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statDescription}>{stat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats; 