import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/for-a-cure-logo.svg';
import dropdownIcon from '../assets/icons/dropdown.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';


const DesktopNavbar: React.FC = () => (
  <div className={styles.desktopNavbar}>
    <div className={styles.topBar}>
      <div className={styles.topBarContent}>
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
          <span className={styles.contactInfo}>
            <span className={styles.divider}>|</span>
            <img src={mailIcon} alt="mail" style={{verticalAlign: 'middle', marginRight: 4}} />
            info@foracure.org.au
            <span className={styles.divider}>|</span>
            <img src={phoneIcon} alt="phone" style={{verticalAlign: 'middle', marginRight: 4}} />
            1300 651 633
          </span>
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
        <Link to="/">
          <img src={logo} alt="For A Cure Foundation Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.navigationLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about/what-we-do" className={styles.navLink}>
          About Us<img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} />
        </Link>
        <button className={styles.navLink}>Research</button>
        <button className={styles.navLink}>Get Involved <img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} /></button>
        <button className={styles.navLink}>News</button>
        <button className={styles.navLink}>Contact</button>
      </div>
    </nav>
  </div>
);

export default DesktopNavbar; 