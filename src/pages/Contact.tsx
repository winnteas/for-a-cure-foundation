import React from 'react';
import styles from './Contact.module.css';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/contact/email.svg';
import locationIcon from '../assets/contact/location.svg';
import phoneIcon from '../assets/contact/phone.svg';
import socialsIcon from '../assets/contact/socials.svg';
import PageTitleSection from '../components/PageTitleSection';
import Button from '../components/Button';

const ContactPage: React.FC = () => (
  <div className={styles.root}>
    {/* Hero/Banner Section */}
    <PageTitleSection title="Contact" />

    {/* Breadcrumbs */}
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span className={styles['breadcrumb-separator']}>/</span>
      <span aria-current="page">Contact</span>
    </nav>

    {/* Main Content Area */}
    <div className={styles.mainContent}>
      <div className={styles.contentContainer}>
        {/* Left Side - Contact Information */}
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionTitle}>We'd Love To Hear From You</h3>
          <p className={styles.sectionDescription}>
            Whether it's a question, idea, or message of support, we'd love to hear from you.
          </p>
          
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
                  <a href="www.facebook.com" className={styles.socialIcon} aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="www.instagram.com" className={styles.socialIcon} aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
                    </svg>
                  </a>
                  <a href="www.linkedin.com" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className={styles.contactForm}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="example@gmail.com"
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
                rows={6}
                required
              ></textarea>
            </div>


            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage; 