import React from 'react';
import styles from './Donate.module.css';
import { Link } from 'react-router-dom';
import DonationSection from '../../features/donation/DonationSection';
import PageTitleSection from '../../components/PageTitleSection';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Button from '../../components/Button';

const DonatePage: React.FC = () => { 
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Get Involved', link: '/get-involved'},
    { label: 'Donate', link: ''}
  ]
  return (
  <div className={styles.root}>
    {/* Hero/Banner Section */}
    <PageTitleSection title="Donate"/>

    <Breadcrumb items={breadcrumbItems}></Breadcrumb>

    {/* Main Content - Reusing DonationSection Component */}
    <div className={styles.mainContent}>
      <DonationSection />
    </div>

    {/* FAQ Section */}
    <div className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
        <p className={styles.faqDescription}>
          Have questions about donating? Find clear answers about how your support helps, tax benefits, secure payments, and ways to give, so you can donate with confidence and purpose.
        </p>
        
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>How will my donation be used?</h4>
              <p className={styles.faqAnswer}>
                Your donation helps fund vital medical research, support awareness initiatives, and drive programs that aim to find life-saving cures.
              </p>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>Is my donation tax-deductible?</h4>
              <p className={styles.faqAnswer}>
                Yes, Aussies 4 Cures Foundation (trading as For A Cure Foundation) is a registered charity, and all donations over $2 are tax-deductible in Australia.
              </p>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>Can I make a recurring donation?</h4>
              <p className={styles.faqAnswer}>
                Absolutely. You can choose to make a monthly donation to provide ongoing support for our research and impact.
              </p>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>Will I receive a receipt for my donation?</h4>
              <p className={styles.faqAnswer}>
                Yes, a tax receipt will be emailed to you immediately after your donation is processed securely through our website.
              </p>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>Can I donate on behalf of someone else?</h4>
              <p className={styles.faqAnswer}>
                Yes, you can make a donation in honour or memory of someone and request a personalised acknowledgement.
              </p>
            </div>
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.faqContent}>
              <h4 className={styles.faqQuestion}>Is it safe to donate online?</h4>
              <p className={styles.faqAnswer}>
                Yes, our donation platform uses secure, encrypted technology to protect your personal and financial information at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Questions Section */}
    <div className={styles.additionalQuestionsSection}>
      <div className={styles.additionalQuestionsContainer}>
        <h3 className={styles.additionalQuestionsTitle}>Have Any Additional Questions?</h3>
        <p className={styles.additionalQuestionsText}>
          We're here to help. Please get in touch if you have any other questions or feedback.
        </p>
        <Link to="/contact">
          <Button variant="primary">Get In Touch</Button>
        </Link>
      </div>
    </div>
  </div>
);
};

export default DonatePage; 