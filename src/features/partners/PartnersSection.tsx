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
import PartnerWithUs from './PartnerWithUs';

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
        <div className={styles.bottomContainer}>
          <div className={styles.partnersCarouselWrapper}>
            <button className={styles.carouselArrow + ' ' + styles.carouselArrowLeft} aria-label="Scroll sponsors left" onClick={() => scrollByAmount(-300)}>&#8592;</button>
            <div className={styles.partnersCarousel} ref={carouselRef} style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}>
              {sponsors.map((s, i) => (
                <img key={i} src={s.src} alt={s.alt} className={styles.partnerLogoImg} />
              ))}
            </div>
            <button className={styles.carouselArrow + ' ' + styles.carouselArrowRight} aria-label="Scroll sponsors right" onClick={() => scrollByAmount(300)}>&#8594;</button>
          </div>
          <Button variant="primary">View All Partners</Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 