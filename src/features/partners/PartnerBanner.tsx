import React from 'react';
import styles from './PartnersSection.module.css';
import Button from '../../components/Button';
import partnerImg from '../../assets/partner.svg';
import { Link } from 'react-router-dom';

interface PartnerBannerProps {
  variant?: 'dark' | 'light';
}

const PartnerBanner: React.FC<PartnerBannerProps> = ({ variant = 'dark' }) => (
  <section className={`${styles.partnerWithUsSection} ${variant === 'light' ? styles.light : ''}`}>
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Partner with Us</h2>
        <p className={styles.sectionDescription}>Join us in driving life-changing research forward. Individuals, Organisations, Ambassadors - Your support helps fund groundbreaking studies, accelerate new treatments, and bring hope to millions affected by serious diseases.</p>
        <Link to="/get-involved/volunteer">
          <Button variant="primary">Join Us</Button>
        </Link>
      </div>
      <div>
        <img src={partnerImg} alt="Partner" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
      </div>
    </div>
  </section>
);

export default PartnerBanner;