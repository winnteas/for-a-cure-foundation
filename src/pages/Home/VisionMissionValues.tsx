import React from 'react';
import styles from './VisionMissionValues.module.css';

interface Card {
  title: string;
  text: string;
}

const cards: Card[] = [
  {
    title: 'Our Vision',
    text: 'To advance stem cell breakthroughs by funding vital research, building global partnerships, securing long-term investment, supporting innovation, and engaging diverse communities in advancing regenerative medicine.'
  },
  {
    title: 'Our Mission',
    text: 'To fund and foster stem cell research and deliver promising treatments and cures, using scientific teams, community, and donors, accelerating health outcomes and hope for generations to come.'
  },
  {
    title: 'Our Values',
    text: 'We value innovation, collaboration, and inclusivity in our mission to save lives. Guided by science, integrity, and care, we strive to make a difference responsibly and effectively.'
  }
];

const VisionMissionValues: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Our Vision, Mission & Values</h2>
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionMissionValues; 