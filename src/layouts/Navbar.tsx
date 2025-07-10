import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/for-a-cure-logo.svg';
import dropdownIcon from '../assets/icons/dropdown.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';

const Navbar: React.FC = () => (
  <>
    <div className={styles.headerTop}>
      <div className={styles.headerTopContent}>
          <div className={styles.left}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook"/>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram"/>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="X">
              <img src={xIcon} alt="X"/>
            </a>
            <a> | </a>
            info@foracure.org.au
            <a> | </a>
            1300 651 633
          </div>
          <div className={styles.infoButtons}>
            <button className={`${styles.infoButton} ${styles.searchButton}`} aria-label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className={`${styles.infoButton} ${styles.donateButton}`}>Donate</button>
            <button className={`${styles.infoButton} ${styles.memberButton}`}>Be a Member</button>
          </div>
        </div>
    </div>
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={logo} alt="For A Cure Foundation Logo" className={styles.logo} />
      </div>
      <div className={styles.navigationLinks}>
        <button className={styles.navLink}>Home</button>
        <button className={styles.navLink}>About Us<img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} /></button>
        <button className={styles.navLink}>Research</button>
        <button className={styles.navLink}>Get Involved <img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} /></button>
        <button className={styles.navLink}>News</button>
        <button className={styles.navLink}>Contact</button>
      </div>
    </nav>
  </>
);

export default Navbar; 