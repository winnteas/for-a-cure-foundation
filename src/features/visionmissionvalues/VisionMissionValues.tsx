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
    text: 'To advance scientific breakthroughs by funding vital research, building global partnerships, securing long term investment, supporting innovation, and engaging diverse communities in advancing regenerative medicine.',
    icon: visionIcon
  },
  {
    title: 'Our Mission',
    text: 'A world where research delivers transformative treatments and cures, uniting scientists, communities, and funders to create lasting health outcomes and hope for generations to come.',
    icon: missionIcon
  },
  {
    title: 'Our Values',
    text: 'We value innovation, collaboration, and transformational impact, turning science into cures. Guided by integrity, inclusivity, and agility, we advance scientific breakthroughs responsibly and effectively.',
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