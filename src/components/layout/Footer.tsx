import React from 'react';
import styles from './Footer.module.css';
import logoWhite from '../../assets/for-a-cure-logo-white.svg';
import NewsletterSection from '../features/NewsletterSection';

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
        <ul className={styles.linksList}>
          <li className={`${styles.linkItem} ${styles.active}`}><span className={styles.linkIcon}>↗</span> About Us</li>
          <li className={styles.linkItem}><span className={styles.linkIcon}>↗</span> Research</li>
          <li className={styles.linkItem}><span className={styles.linkIcon}>↗</span> News</li>
          <li className={styles.linkItem}><span className={styles.linkIcon}>↗</span> Get Involved</li>
        </ul>
      </div>
      {/* Get In Touch */}
      <div className={styles.contactSection}>
        <div className={styles.sectionTitle}>Get In Touch</div>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}><span className={styles.contactIcon}>📍</span> PO Box 1071, Woollahra NSW 1350.</li>
          <li className={styles.contactItem}><span className={styles.contactIcon}>📞</span> 1300 651 633</li>
          <li className={styles.contactItem}><span className={styles.contactIcon}>✉️</span> info@foracure.org.au</li>
        </ul>
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">{/* Facebook */} <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg></a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">{/* Instagram */} <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          <a href="#" className={styles.socialIcon} aria-label="X">{/* X (Twitter) */} <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0l-4.47 4.47-4.47-4.47a.75.75 0 0 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 0 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg></a>
        </div>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.footerBottom}>
      <div>Copyright © 2025 For A Cure Foundation</div>
      <div>ABN/DGR 66677630705</div>
    </div>
  </footer>
);

export default Footer; 