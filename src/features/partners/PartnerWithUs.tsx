import React from 'react';
import styles from './PartnersSection.module.css';
import Button from '../../components/Button';
import partnerImg from '../../assets/partner.svg';

const PartnerWithUs: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Partner with Us</h2>
          <p className={styles.sectionDescription}>Join us in driving life-changing research forward. Individuals, Organisations, Ambassadors - Your support helps fund groundbreaking studies, accelerate new treatments, and bring hope to millions affected by serious diseases.</p>
          <Button variant="primary">Join Us</Button>
        </div>
        <div>
          <img src={partnerImg} alt="Partner" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  </section>
);

export default PartnerWithUs; 