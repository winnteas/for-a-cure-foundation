import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/contact/email.svg';
import locationIcon from '../assets/contact/location.svg';
import phoneIcon from '../assets/contact/phone.svg';
import socialsIcon from '../assets/contact/socials.svg';
import PageTitleSection from '../components/PageTitleSection';
import Button from '../components/Button';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import { sendContactEmail } from "../api/contact";
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';
import linkedInIcon from '../assets/icons/linkedin.svg';

const ContactPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact', link: ''}
  ]

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
  
  <div className={styles.root}>
    {/* Hero/Banner Section */}
    <PageTitleSection title="Contact" />
    <div className={styles.bg}>
    <Breadcrumb items={breadcrumbItems}></Breadcrumb>

    {/* Main Content Area */}
    <div className={styles.mainContent}>
      <div className={styles.contentContainer}>
        {/* Left Side - Contact Information */}
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>We'd Love To Hear From You</h3>
          <p className={styles.sectionDescription}>
            Whether it's a question, idea, or message of support, we'd love to hear from you.
          </p>

          <div className={styles.contactBottom} >
          
          <div className={styles.contactGrid}>
            <div className={styles.contactBox}>
                <div className={styles.contactItem}>
                    <img src={emailIcon} alt="Email" />

                <div className={styles.contactDetails}>
                    <h4 className={styles.contactLabel}>Email</h4>
                    <p className={styles.contactValue}>info@foracure.org.au</p>
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
                <img src={locationIcon} alt="Office location" />
              <div className={styles.contactDetails}>
                <h4 className={styles.contactLabel}>Office</h4>
                <p className={styles.contactValue}>PO Box 1071, Woollahra NSW 1350.</p>
              </div>
            </div>

            <div className={styles.contactItem}>
                <img src={phoneIcon} alt="Phone" />
              <div className={styles.contactDetails}>
                <h4 className={styles.contactLabel}>Phone</h4>
                <p className={styles.contactValue}>1300 651 633</p>
              </div>
            </div>

            <div className={styles.contactItem}>
                <img src={socialsIcon} alt="Social media" />
              <div className={styles.contactDetails}>
                <h4 className={styles.contactLabel}>Socials</h4>
                <div className={styles.socialIcons}>
                           <a href="https://www.facebook.com/stemcells.foracure/" className={styles.socialIcon} aria-label="Facebook"><img src={facebookIcon} alt="Facebook" className={styles.socialIcon} /></a>
          <a href="https://www.instagram.com/foracurefoundation/" className={styles.socialIcon} aria-label="Instagram"><img src={instagramIcon} alt="Instagram" className={styles.socialIcon} /></a>
          <a href="https://x.com/foracure" className={styles.socialIcon} aria-label="X"><img src={xIcon} alt="X" className={styles.socialIcon} /></a>
          <a href="https://www.linkedin.com/company/for-a-cure-foundation/?viewAsMember=true" className={styles.socialIcon} aria-label="LinkedIn"><img src={linkedInIcon} alt="LinkedIn" className={styles.socialIcon} /></a>
                </div>
              </div>
            </div>
          </div>


        {/* Right Side - Contact Form */}
        <div className={styles.contactForm}>
          <form  onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={styles.formInput}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                className={styles.formTextarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              ></textarea>
            </div>


            <button type="submit" className={styles.submitButton}>
              Send
            </button>

            {status && <p className={styles.formLabel}>{status}</p>}
          </form>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>

);
};

export default ContactPage;