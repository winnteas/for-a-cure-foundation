import React, { useState } from 'react';
import styles from './DonationSection.module.css';
import heartHandIcon from '../../assets/icons/impact-stats/heart.svg'; // Placeholder for top icon
import petriDishImg from '../../assets/donate/hands.svg'; // Placeholder for petri dish image
import cardIcon from '../../assets/icons/impact-stats/money.svg'; // Placeholder for card icons

const DonationSection: React.FC = () => {
  type Frequency = 'On-time' | 'Monthly';
  const [frequency, setFrequency] = useState<Frequency>('On-time');
  const [amount, setAmount] = useState<number | ''>('');
  const [custom, setCustom] = useState('');

  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustom('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value);
    setAmount('');
  };

  return (
    <section className={styles.section}>
      <div className={styles.donationContainer}>
        <div className={styles.leftCol}>
          <div className={styles.topIcon}><img src={heartHandIcon} alt="Donate" /></div>
          <h2 className={styles.heading}>Help Us Make a Difference!</h2>
          <div className={styles.subtitle}>Your Donation</div>
          <div className={styles.tabToggle}>
            <button className={frequency === 'On-time' ? styles.tabActive : ''} onClick={() => setFrequency('On-time')}>On-Time</button>
            <button className={frequency === 'Monthly' ? styles.tabActive : ''} onClick={() => setFrequency('Monthly')}>Monthly</button>
          </div>
          <div className={styles.amountRow}>
            {[20, 50, 100, 200].map(val => (
              <button
                key={val}
                className={amount === val ? styles.amountActive : styles.amountBtn}
                onClick={() => handleAmountClick(val)}
                type="button"
              >
                {val}
              </button>
            ))}
            <input
              className={styles.amountCustom}
              placeholder="Custom"
              value={custom}
              onChange={handleCustomChange}
              type="number"
              min={1}
            />
          </div>
          <input
            className={styles.amountInput}
            placeholder="AUD $"
            value={custom || amount}
            onChange={handleCustomChange}
            type="number"
            min={1}
          />
          <div className={styles.paymentLabel}>Payment Method</div>
          {/* <div className={styles.paymentBox}>
            <span className={styles.paymentIcon}><img src={cardIcon} alt="Card" /></span>
            <span className={styles.paymentText}>Card</span>
          </div> */}
          {/* <div className={styles.cardLabel}>Card number</div>
          <div className={styles.cardInputBox}>
            <input className={styles.cardInput} placeholder="1234 1234 1234 1234" />
            <img src={cardIcon} alt="Card icons" className={styles.cardIcons} />
          </div> */}
          {/* <button className={styles.donateBtn}>Donate Now</button> */}
        </div>
        <div className={styles.rightCol}>
          <img src={petriDishImg} alt="unitedHands" className={styles.unitedHands} />
        </div>
      </div>
      
    </section>
  );
};

export default DonationSection; 