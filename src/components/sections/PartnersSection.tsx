import React from 'react';
import styles from './PartnersSection.module.css';
import Button from '../Button';

const PartnersSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Become a Partner</h2>
          <p className={styles.sectionDescription}>Join us in driving life-changing research forward. As a partner, your support fuels breakthroughs and brings hope to millions affected by serious diseases.</p>
          <Button variant="primary">Join Us</Button>
        </div>
        <div className={styles.emojiContainer}>
          <span className={styles.emoji}>🤝</span>
        </div>
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
      </div>
      <Button variant="outline">View All Partners</Button>
    </div>
  </section>
);

export default PartnersSection; 