import React from 'react';
import styles from './VisionMissionValues.module.css';
import visionIcon from '../../assets/icons/vision.svg';
import missionIcon from '../../assets/icons/mission.svg';
import valuesIcon from '../../assets/icons/values.svg';

interface Card {
  title: string;
  text: string;
  icon: string;
}

const cards: Card[] = [
  {
    title: 'Our Vision',
    text: 'To advance stem cell breakthroughs by funding vital research, building global partnerships, securing long-term investment, supporting innovation, and engaging diverse communities in advancing regenerative medicine.',
    icon: visionIcon
  },
  {
    title: 'Our Mission',
    text: 'To fund and foster stem cell research and deliver promising treatments and cures, using scientific teams, community, and donors, accelerating health outcomes and hope for generations to come.',
    icon: missionIcon
  },
  {
    title: 'Our Values',
    text: 'We value innovation, collaboration, and inclusivity in our mission to save lives. Guided by science, integrity, and care, we strive to make a difference responsibly and effectively.',
    icon: valuesIcon
  }
];

const VisionMissionValues: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
  
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <img src={card.icon} alt={card.title} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionValues; 