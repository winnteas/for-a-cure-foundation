import React from 'react';
import styles from './PartnersSection.module.css';
import Button from '../../components/Button';
import partnerImg from '../../assets/partner.png';
import mccables from '../../assets/sponsors/mccables.svg';
import doyles from '../../assets/sponsors/doyles.svg';
import twogb from '../../assets/sponsors/2gb.svg';
import sunbury from '../../assets/sponsors/sunbury.svg';
import jfk from '../../assets/sponsors/jfk.svg';

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
      <div className={styles.partnersCarouselWrapper}>
        <button className={styles.carouselArrow + ' ' + styles.carouselArrowLeft} aria-label="Scroll sponsors left">&#8592;</button>
        <div className={styles.partnersCarousel}>
          <img src={sunbury} alt="Sunbury Primary School" className={styles.partnerLogoImg} />
          <img src={twogb} alt="2GB Sydney" className={styles.partnerLogoImg} />
          <img src={doyles} alt="Doyles" className={styles.partnerLogoImg} />
          <img src={mccables} alt="MC Cables" className={styles.partnerLogoImg} />
          <img src={jfk} alt="JFK" className={styles.partnerLogoImg} />
        </div>
        <button className={styles.carouselArrow + ' ' + styles.carouselArrowRight} aria-label="Scroll sponsors right">&#8594;</button>
      </div>
      <Button variant="primary">View All Partners</Button>
    </div>
  </section>
);

export default PartnersSection; 