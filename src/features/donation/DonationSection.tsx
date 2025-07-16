import React from 'react';
import styles from './DonationSection.module.css';
import glovesIcon from '../../assets/icons/gloves.svg';

const DonationSection: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className="sectionTitle largeText">Help Us Make a <span style={{ color: 'var(--primary-blue)' }}>Difference!</span></h2>
        <label className={styles.label}>Your Donation</label>
        <div className={styles.amountButtons}>
          <button type="button" className={styles.amountButton}>20</button>
          <button type="button" className={styles.amountButton}>50</button>
          <button type="button" className={styles.amountButton}>100</button>
          <button type="button" className={styles.amountButton}>200</button>
          <input type="text" placeholder="Custom" className={styles.customInput} />
        </div>
        <label className={styles.label}>Payment Method</label>
        <input type="text" placeholder="Card number" className={styles.cardInput} />
        <button className={styles.donateButton}>Donate Now</button>
      </form>
      <div className={styles.emojiContainer}>
        <img src={glovesIcon} alt="Gloves" className={styles.emoji} />
      </div>
    </div>
  </section>
);

export default DonationSection; 