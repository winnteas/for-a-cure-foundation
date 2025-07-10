import React from 'react';
import styles from './NewsletterSection.module.css';
import Button from '../../components/Button';

const NewsletterSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Subscribe To Our Newsletter!</h2>
    <form className={styles.form}>
      <input type="email" placeholder="example@gmail.com" className={styles.emailInput} />
      <Button type="submit" variant="primary">Subscribe</Button>
    </form>
  </section>
);

export default NewsletterSection; 