import React, { useState } from 'react';
import styles from './ImpactStats.module.css';
import moneyIcon from '../../assets/icons/impact-stats/money.svg';
import heartIcon from '../../assets/icons/impact-stats/heart.svg';
import microscopeIcon from '../../assets/icons/impact-stats/microscope.svg';
import dnaIcon from '../../assets/icons/impact-stats/dna.svg';
import briefcaseIcon from '../../assets/icons/impact-stats/briefcase.svg';
import fundsPhoto from '../../assets/icons/funds-photo.svg';
import dots from '../../assets/icons/impact-stats/dot-grid.svg';
import Button from '../../components/Button';
import externalLink from '../../assets/icons/external-link-black.svg';

const stats = [
  {
    label: 'Raising',
    value: '$15M+',
    desc: 'To directly fund life-saving research.',
    icon: moneyIcon,
    alt: 'Money',
    image: fundsPhoto,
  },
  {
    label: 'Research Projects',
    value: '120+',
    desc: 'Supported across institutions worldwide.',
    icon: dnaIcon,
    alt: 'DNA',
    image: fundsPhoto,
  },
  {
    label: 'Donors',
    value: '5,000+',
    desc: 'Individuals and organisations funding a cure.',
    icon: heartIcon,
    alt: 'Heart',
    image: fundsPhoto,
  },
  {
    label: 'Clinical Trials',
    value: '30+',
    desc: 'Accelerating therapies from the lab to the clinic.',
    icon: briefcaseIcon,
    alt: 'Medical Kit',
    image: fundsPhoto,
  },
  {
    label: 'Researchers Funded',
    value: '50+',
    desc: 'Leading scientists working on stem cell research.',
    icon: microscopeIcon,
    alt: 'Microscope',
    image: fundsPhoto,
  },
];

const ImpactStats: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileActiveIdx, setMobileActiveIdx] = useState<number | null>(null);

  const activeStat = stats[activeIdx];

  const handleMobileClick = (idx: number) => {
    setMobileActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section}>
      <div className={styles.impactContainer}>
        <div className={styles.impactTitle}>
          <span className={styles.impactMainTitle}>Your Contribution</span>
          <span className={styles.impactMainTitle}>Makes All The Difference</span>
          <span className={styles.impactSubTitle}>Join the movement to support Aussie scientists for a cure! </span>
          <Button variant="primary">Donate On GoFundMe
          <img className={styles.buttonIcon} src={externalLink} />
          </Button>
        </div>

        {/* Desktop / tablet layout */}
        <div className={styles.desktopLayout}>
          <div className={styles.impactBlueBox}>
            <div className={styles.iconRow}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={idx === activeIdx ? styles.iconCardActive : styles.iconCard}
                  onClick={() => setActiveIdx(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={stat.icon} alt={stat.alt} />
                  {idx === activeIdx && <div className={styles.iconPointer} />}
                </div>
              ))}
            </div>
            <div className={styles.impactGrid}>
              <div className={styles.impactStatBox}>
                <div className={styles.impactStatLabel}>{activeStat.label}</div>
                <div className={styles.impactStatValue}>{activeStat.value}</div>
                <div className={styles.impactStatDesc}>{activeStat.desc}</div>
              </div>
              <div className={styles.impactImageBox}>
                <img src={fundsPhoto} alt={activeStat.alt} className={styles.impactImage} />
                <img src={dots} alt={activeStat.alt} className={styles.dotsImage} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout: cards flip to reveal text inside */}
        <div className={styles.mobileLayout}>
          <div className={styles.mobileList}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`${styles.iconCard} ${styles.mobileIconCard}`}
                onClick={() => handleMobileClick(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className={`${styles.cardInner} ${
                    mobileActiveIdx === idx ? styles.cardInnerFlipped : ''
                  }`}
                >
                  <div className={styles.cardFront}>
                    <img src={stat.icon} alt={stat.alt} />
                  </div>
                  <div className={styles.cardBack}>
                    <div className={styles.mobileScrollable}>
                      <div className={styles.mobileLabel}>{stat.label}</div>
                      <div className={styles.mobileValue}>{stat.value}</div>
                      <div className={styles.mobileDesc}>{stat.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

