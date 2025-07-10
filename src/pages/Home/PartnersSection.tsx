import React from 'react';
import styles from './PartnersSection.module.css';
import Button from '../../components/Button';
import partnerImg from '../../assets/partner.png';

const PartnersSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Become a Partner</h2>
          <p className={styles.sectionDescription}>Join us in driving life-changing research forward. As a partner, your support fuels breakthroughs and brings hope to millions affected by serious diseases.</p>
          <Button variant="primary">Join Us</Button>
        </div>
        <div>
          <img src={partnerImg} alt="Partner" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
      </div>
      <div className={styles.partnersContainer}>
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
        <div className={styles.partnerLogo} />
      </div>
      <Button variant="primary">View All Partners</Button>
    </div>
  </section>
);

export default PartnersSection; 