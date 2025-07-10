import React from 'react';
import styles from './Footer.module.css';
import logoWhite from '../assets/for-a-cure-logo-white.svg';
import NewsletterSection from '../features/newsletter/NewsletterSection';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';
import locationIcon from '../assets/icons/location.svg';
import phoneIcon from '../assets/icons/phone.svg';
import mailIcon from '../assets/icons/mail.svg';
import externalLinkWhite from '../assets/icons/external-link-white.svg';

// You can use react-icons or inline SVGs for icons. Here, we'll use inline SVGs for simplicity.

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <NewsletterSection />
    <hr className={styles.divider} />
    <div className={styles.footerContent}>
      {/* Logo and Org Info */}
      <div className={styles.logoSection}>
        <img src={logoWhite} alt="For A Cure Foundation" className={styles.logo} />
        <div className={styles.orgInfo}>
          Aussies 4 Cures Foundation<br />
          ABN/DGR 66677630705 trading as For A Cure Foundation is a charitable organisation<br />
          (Charity) advancing the prevention or control of diseases in human beings.
        </div>
      </div>
      {/* Quick Links */}
      <div className={styles.linksSection}>
        <div className={styles.sectionTitle}>Quick Links</div>
        <ul className={styles.linksList + ' smallText'}>
          <li className={styles.linkItem}><img src={externalLinkWhite} alt="external link"/> About Us</li>
          <li className={styles.linkItem}><img src={externalLinkWhite} alt="external link" /> Research</li>
          <li className={styles.linkItem}><img src={externalLinkWhite} alt="external link" /> News</li>
          <li className={styles.linkItem}><img src={externalLinkWhite} alt="external link" /> Get Involved</li>
        </ul>
      </div>
      {/* Get In Touch */}
      <div className={styles.contactSection}>
        <div className={styles.sectionTitle}>Get In Touch</div>
        <ul className={styles.contactList + ' smallText'}>
          <li className={styles.contactItem}><img src={locationIcon} alt="Location" className={styles.contactIcon} /> PO Box 1071, Woollahra NSW 1350.</li>
          <li className={styles.contactItem}><img src={phoneIcon} alt="Phone" className={styles.contactIcon} /> 1300 651 633</li>
          <li className={styles.contactItem}><img src={mailIcon} alt="Mail" className={styles.contactIcon} /> info@foracure.org.au</li>
        </ul>
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook"><img src={facebookIcon} alt="Facebook" className={styles.socialIcon} /></a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram"><img src={instagramIcon} alt="Instagram" className={styles.socialIcon} /></a>
          <a href="#" className={styles.socialIcon} aria-label="X"><img src={xIcon} alt="X" className={styles.socialIcon} /></a>
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.footerBottom + ' smallText'}>
      <div>Copyright © 2025 For A Cure Foundation</div>
      <div>ABN/DGR 66677630705</div>
    </div>
  </footer>
);

export default Footer; 