import React, { useState } from 'react';
import styles from './Navbar.module.css';
import compactLogo from '../assets/icons/compact-logo.svg';
import hamburgerMenu from '../assets/icons/hamburger-menu.svg';
import closeButton from '../assets/icons/close-button.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';

const navLinks = [
  { label: 'Home' },
  { label: 'About Us', hasDropdown: true },
  { label: 'Research' },
  { label: 'Get Involved', hasDropdown: true },
  { label: 'News' },
  { label: 'Contact' },
];

const MobileNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
    <div className={styles.mobileNavbar + ' ' + styles.navbar}>
        <img src={compactLogo} alt="For A Cure Foundation Compact Logo" className={styles.mobileNavbarLogo} />
        <button
        className={styles.mobileHamburgerButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        >
        <img
            src={isMenuOpen ? closeButton : hamburgerMenu}
            alt={isMenuOpen ? 'Close menu' : 'Open menu'}
            className={styles.mobileHamburgerIcon}
        />
        </button>
        {isMenuOpen && (
        <div className={styles.mobileMenuCustom}>
            <div className={styles.mobileMenuCard}>
            <div className={styles.mobileMenuGrid}>
            {navLinks.map((link, idx) => (
                <button key={link.label} className={styles.mobileMenuItem}>
                    <span className={styles.mobileMenuItemContent}>{link.label}</span>
                    {link.hasDropdown && (
                        <div className={styles.mobileMenuDropdownBox}>
                            <span className={styles.mobileMenuDropdownArrow}>▼</span>
                        </div>
                    )}
                </button>
            ))}
            </div>
            </div>
            <div className={styles.mobileMenuBottom}>
            <div className={styles.mobileMenuActions}>
                <button className={`${styles.infoButton} ${styles.donateButton}`}>Donate</button>
                <button className={`${styles.infoButton} ${styles.memberButton}`}>Be a Member</button>
            </div>
            <div className={styles.mobileMenuSocials}>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="X">
                <img src={xIcon} alt="X" />
                </a>
            </div>
            </div>
        </div>
        )}
    </div>
)};

export default MobileNavbar; 