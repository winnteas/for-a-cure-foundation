import React, { useState } from 'react';
import styles from './ImpactStats.module.css';
import moneyIcon from '../../assets/icons/impact-stats/money.svg';
import heartIcon from '../../assets/icons/impact-stats/heart.svg';
import microscopeIcon from '../../assets/icons/impact-stats/microscope.svg';
import dnaIcon from '../../assets/icons/impact-stats/dna.svg';
import briefcaseIcon from '../../assets/icons/impact-stats/briefcase.svg';
import fundsPhoto from '../../assets/icons/funds-photo.svg';

const stats = [
  {
    label: 'Raised',
    value: '$15M+',
    desc: 'Funds invested directly into life-saving research.',
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
  const activeStat = stats[activeIdx];

  return (
    <section className={styles.section}>
      <div className={styles.impactContainer}>
        <div className={styles.impactTitle}>
          <span className={styles.impactSubtitle}>Your Contribution</span>
          <span className={styles.impactMainTitle}>Makes All The Difference</span>
        </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats; 