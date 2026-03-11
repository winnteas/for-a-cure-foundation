import React from 'react';
import styles from './HeroSection.module.css';
import heroBanner from '../../assets/hero-banner.svg';
import Button from '../../components/Button';
import externalLinkIcon from '../../assets/icons/external-link-black.svg';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <section
    className={styles.heroSection}
    style={{ backgroundImage: `url(${heroBanner})` }}
  >
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>
        <span className={styles.together}>Together,</span> <br />
        {/* We Can Advance <br /> */}
        We Drive Life-Saving Research Forward!
      </h1>
      <p className={styles.heroDescription}>Join us in supporting cutting-edge research that brings us closer to a cure.</p>
      <Link to="/research">
         <Button variant="primary">Explore Our Research
         <img className={styles.buttonIcon} src={externalLinkIcon} alt="GoFundMe" />

         </Button>
      </Link>
    
    </div>
  </section>
);

export default HeroSection; 