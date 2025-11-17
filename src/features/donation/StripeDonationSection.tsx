import * as React from 'react';
import styles from './DonationSection.module.css';
import cheque from '../../assets/donate/cheque.pdf'
import Button from '../../components/Button';

const StripeDonationSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.donationContainer}>
      <h2 className={styles.heading}>Help Us Make a Difference!</h2>

      <h3 className={styles.subtitle}>Online Payment</h3>
    <stripe-buy-button
    buy-button-id="buy_btn_1SJc3WHkatYcDQCkhd1rTx6z"
    publishable-key="pk_live_51SDbRLHkatYcDQCk3uSrhkNBI9orrIjWSiX8ehGDGIDNRMJd7rK7eiGoFnDnMUSQjy6idc0qY3yKKEaFK2JWxchU00yE9CAcmu"
    ></stripe-buy-button>


        <h3 className={styles.subtitle}>Cheque</h3>
         <Button variant="primary"> <a href={cheque} target="_blank"  style={{ textDecoration: "none", color: "inherit" }}>Payment Form</a></Button>
          </div>

      </section>
  );
}

export default StripeDonationSection;