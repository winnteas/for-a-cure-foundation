import React, { useState } from 'react';
import styles from './NewsletterSection.module.css';
import Button from '../../components/Button';
import { subscribe } from '../../api/subscribe';
import subscribeIcon from '../../assets/icons/subscribe.svg';

const NewsletterSection: React.FC = () => {

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Subscribing... Please wait...");

    try {
      const response = await subscribe(email);
      setStatus("You are now subscribed!");
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    }
  };
 return (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Subscribe To Our Newsletter!</h2>
    <form  onSubmit={handleSubmit} className={styles.form}>
      <input 
      type="email" 
      placeholder="example@gmail.com" 
      className={styles.emailInput}
       onChange={(e) => setEmail(e.target.value)}
      value={email} 
       required/>
      <div className={styles.buttonWrapper}>
        <Button type="submit" variant="primary">
          <span className={styles.subscribeText}>Subscribe</span>
          <img src={subscribeIcon} alt="Subscribe" className={styles.subscribeIcon} />
        </Button>
      </div>
      
    </form>
    {status && <p className={styles.formLabel}>{status}</p>}
  </section>

)}
;

export default NewsletterSection;