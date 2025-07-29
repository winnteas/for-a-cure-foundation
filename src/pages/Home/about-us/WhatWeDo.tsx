import React from 'react';
import styles from './WhatWeDo.module.css';
import researchImg1 from '../../../assets/partner.png'; // Placeholder, replace with actual
import researchImg2 from '../../../assets/partner.png'; // Placeholder, replace with actual
import heartImg from '../../../assets/partner.png'; // Placeholder, replace with actual
import VisionMissionValues from '../../../features/visionmissionvalues/VisionMissionValues';
import { Link } from 'react-router-dom';

const WhatWeDoSection: React.FC = () => (
  <div className={styles.root}>
    <div className={styles.titleSection}>
      <h2 className={styles.title}>What We Do</h2>
    </div>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span className={styles['breadcrumb-separator']}>/</span>
      <Link to="/about/what-we-do">About Us</Link>
      <span className={styles['breadcrumb-separator']}>/</span>
      <span aria-current="page">What We Do</span>
    </nav>
    <div className={styles.featureRow}>
      <div className={styles.featureLeftBlue}>
        <h3 className={styles.featureTitle}>Science that<br/>Transforms Lives</h3>
        <p className={styles.featureText}>
          At For A Cure Foundation, we are at the forefront of science and technology, driving stem cell research and regenerative medicine to find cures for life-threatening diseases. Our goal is to accelerate innovative medical research and expedite discoveries to cure the major diseases of our time.
        </p>
        <button className={styles.orangeButton}>Discover Our Research</button>
      </div>
      <div className={styles.featureRightImg}>
        <img src={researchImg1} alt="Research" />
      </div>
    </div>
    <div className={styles.featureRow}>
      <div className={styles.featureLeftImg}>
        <img src={researchImg2} alt="Lab" />
      </div>
      <div className={styles.featureRightWhite}>
        <h3 className={styles.featureTitle}>Donations that<br/>Generate Discoveries</h3>
        <p className={styles.featureText}>
          We believe that cutting-edge stem cell research offers real hope for developing cures and therapies for a wide range of conditions. We direct our funds directly to laboratories, ensuring that support reaches where it's most needed to drive significant advances. This vital research paves the way for solutions for diseases such as:
        </p>
        <button className={styles.orangeButton}>Donate Now</button>
      </div>
    </div>
    <VisionMissionValues/>
    <div className={styles.partnerSection}>
      <div className={styles.partnerTextBox}>
        <h3 className={styles.partnerTitle}>Become a Partner</h3>
        <p className={styles.partnerText}>Join us in driving life-changing research forward. As a partner, your support helps fund groundbreaking studies, accelerate new treatments, and bring hope to millions affected by serious diseases.</p>
        <button className={styles.orangeButton}>Join Us</button>
      </div>
      <div className={styles.partnerHeartImg}>
        <img src={heartImg} alt="Partner Heart" />
      </div>
    </div>
  </div>
);

export default WhatWeDoSection; 