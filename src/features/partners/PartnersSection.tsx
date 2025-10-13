import React, { useRef } from 'react';
import styles from './PartnersSection.module.css';
import Button from '../../components/Button';
import mccables from '../../assets/sponsors/mccables.svg';
import doyles from '../../assets/sponsors/doyles.svg';
import twogb from '../../assets/sponsors/2gb.svg';
import sunbury from '../../assets/sponsors/sunbury.svg';
import jfk from '../../assets/sponsors/jfk.svg';
import tafe from '../../assets/sponsors/tafe.svg';
import morgan from '../../assets/sponsors/morgan.svg';
import alchemy from '../../assets/sponsors/alchemy-partners.svg';
import fellia from '../../assets/sponsors/fellia-melas-gallery.svg';
import lionsden from '../../assets/sponsors/lions-den-academy.svg';
import arrowLeft from '../../assets/sponsors/arrow-left.svg';
import arrowRight from '../../assets/sponsors/arrow-right.svg';

import PartnerWithUs from './PartnerWithUs';
import { Link } from 'react-router-dom';

const sponsors = [
  { src: sunbury, alt: 'Sunbury Primary School' },
  { src: twogb, alt: '2GB Sydney' },
  { src: doyles, alt: 'Doyles' },
  { src: mccables, alt: 'MC Cables' },
  { src: jfk, alt: 'JFK Automation' },
  { src: tafe, alt: 'TAFE' },
  { src: morgan, alt: 'Morgan Boxing' },
  { src: alchemy, alt: 'Alchemy Partners' },
  { src: fellia, alt: 'Fellia Melas Gallery' },
  { src: lionsden, alt: "Lion's Den Academy" },
];

const PartnersSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PartnerWithUs/>
        <div className="whiteDivider"></div>
        <div className={styles.bottomContainer}>
          <div className={styles.partnersCarouselWrapper}>
            <button aria-label="Scroll sponsors left" className={styles.arrow + ' ' + styles.carouselArrowLeft} onClick={() => scrollByAmount(-300)}>
            <img src={arrowLeft} alt="Left arrow"/>
            </button>
            <div className={styles.partnersCarousel} ref={carouselRef} style={{ overflowX: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'none' }}>
              {sponsors.map((s, i) => (
                <img key={i} src={s.src} alt={s.alt} className={styles.partnerLogoImg} />
              ))}
            </div>
            <button aria-label="Scroll sponsors right" className={styles.arrow + ' ' + styles.carouselArrowRight} onClick={() => scrollByAmount(-300)}>
            <img src={arrowRight} alt="Right arrow"/>
            </button>
          </div>
          <Link to="/get-involved/our-friends">
         <Button variant="primary">View All Friends</Button>
      </Link>
          <div className="whiteDivider"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 