import React from 'react';
import styles from './HeroSection.module.css';
import heroBanner from '../../assets/hero-banner.svg';
import Button from '../../components/Button';
import externalLinkIcon from '../../assets/icons/external-link.svg';

const HeroSection: React.FC = () => (
  <section
    className={styles.heroSection}
    style={{ backgroundImage: `url(${heroBanner})` }}
  >
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        <span className={styles.orangeUnderline}>Together</span>, <br />
        We Can Advance <br />
        Life-Saving Research!
      </h1>
      <p className={styles.heroDescription}>Join us in supporting cutting-edge research that brings us closer to a cure.</p>
      <Button variant="primary">
        Explore Our Research 
        <img src={externalLinkIcon} alt="external link" style={{width: '16px', height: '16px', marginLeft: '8px', verticalAlign: 'middle'}} />
      </Button>
    
    </div>
  </section>
);

export default HeroSection; 