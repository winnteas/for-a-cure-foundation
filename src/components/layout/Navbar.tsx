import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/for-a-cure-logo.svg';
import dropdownIcon from '../../assets/icons/dropdown.svg';

const Navbar: React.FC = () => (
  <>
    <div className={styles.headerTop}>
      <div className={styles.headerTopContent}>
        <div className={styles.left}>
          <a href="#" className={styles.socialIcon} aria-label="Facebook"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z"/></svg></a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          <a href="#" className={styles.socialIcon} aria-label="X"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0l-4.47 4.47-4.47-4.47a.75.75 0 0 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 0 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.06z"/></svg></a>
        </div>
        <div className={styles.right}>
          <div className={styles.infoButtons}>
            <button className={`${styles.infoButton} ${styles.searchButton}`} aria-label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button className={`${styles.infoButton} ${styles.donateButton}`}>Donate</button>
            <button className={`${styles.infoButton} ${styles.memberButton}`}>Be a Member</button>
          </div>
        </div>
      </div>
    </div>
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={logo} alt="For A Cure Foundation Logo" className={styles.logo} />
      </div>
      <div className={styles.navigationLinks}>
        <button className={styles.navLink}>Home</button>
        <button className={styles.navLink}>About Us <img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} /></button>
        <button className={styles.navLink}>Research</button>
        <button className={styles.navLink}>Get Involved <img src={dropdownIcon} alt="dropdown" style={{height: '0.4em', marginLeft: 2, verticalAlign: 'middle'}} /></button>
        <button className={styles.navLink}>News</button>
        <button className={styles.navLink}>Contact</button>
      </div>
    </nav>
  </>
);

export default Navbar; 