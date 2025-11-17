import React, { useState } from 'react';
import styles from './NewsletterSection.module.css';
import Button from '../../components/Button';
import { sendContactEmail } from '../../api/contact';
[]
const NewsletterSection: React.FC = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending... Please wait...");

    try {
      const response = await sendContactEmail(email, message);
      setStatus("Email sent successfully!");
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    }
  };
 return (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>Subscribe To Our Newsletter!</h2>
    <form className={styles.form}>
      <input type="email" placeholder="example@gmail.com" className={styles.emailInput} />
      <Button type="submit" variant="primary">Subscribe</Button>
    </form>
  </section>

)}
;

export default NewsletterSection;