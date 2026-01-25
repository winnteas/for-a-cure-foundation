import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import compactLogo from '../assets/icons/compact-logo.svg';
import hamburgerMenu from '../assets/icons/hamburger-menu.svg';
import closeButton from '../assets/icons/close-button.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedInIcon from '../assets/icons/linkedin.svg';
import xIcon from '../assets/icons/x.svg';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', hasDropdown: true, dropdownItems: [
    { label: 'What We Do', path: '/about/what-we-do' },
    { label: 'Cleone on the frontline', path: '/about/cleone-on-the-frontline' },
    { label: 'Our People', path: '/about/our-people' }
  ]},
  { label: 'Research', path: '/research' },
  { label: 'Get Involved', hasDropdown: true, dropdownItems: [
    { label: 'Donate', path: '/get-involved/donate' },
    { label: 'Volunteer', path: '/get-involved/volunteer' },
    { label: 'Our Friends', path: '/get-involved/our-friends' }
  ]},
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

const MobileNavbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSections, setOpenSections] = useState<{ [label: string]: boolean }>({});
    const location = useLocation();

    const toggleMobileMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    const toggleSection = (label: string) => {
      setOpenSections(prev => ({ ...prev, [label]: !prev[label] }));
    };

    const renderNavItem = (link: any) => {
      if (link.hasDropdown) {
        return (
          <div key={link.label} className={styles.mobileMenuDropdown}>
            <button
              type="button"
              className={styles.mobileMenuItem}
              aria-expanded={!!openSections[link.label]}
              onClick={() => toggleSection(link.label)}
            >
              <span className={styles.mobileMenuItemContent}>{link.label}</span>
            </button>
            {link.dropdownItems && openSections[link.label] && (
              <div className={styles.mobileDropdownItems}>
                {link.dropdownItems.map((item: any) => (
                  <Link 
                    key={item.label} 
                    to={item.path} 
                    className={styles.mobileDropdownItem}
                    onClick={closeMenu}
                  >
                    <span className={styles.mobileMenuItemContent}>{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      }
      
      if (link.path) {
        return (
          <Link 
            key={link.label} 
            to={link.path} 
            className={styles.mobileMenuItem}
            onClick={closeMenu}
          >
            <span className={styles.mobileMenuItemContent}>{link.label}</span>
          </Link>
        );
      }
      
      return (
        <button key={link.label} className={styles.mobileMenuItem}>
          <span className={styles.mobileMenuItemContent}>{link.label}</span>
        </button>
      );
    };

    return (
    <div className={styles.mobileNavbar + ' ' + styles.navbar}>
        <Link to="/">
          <img src={compactLogo} alt="For A Cure Foundation Compact Logo" className={styles.mobileNavbarLogo} />
        </Link>
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
              {/* Header Section with Logo and Close Button */}
              <div className={styles.mobileMenuHeader}>
                <div className={styles.mobileMenuLogoSection}>
                  <img src={compactLogo} alt="For A Cure Foundation Logo" className={styles.mobileMenuLogo} />
                </div>
                <button 
                  className={styles.mobileMenuCloseButton}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <img src={closeButton} alt="Close" className={styles.closeIcon} />
                </button>
              </div>
              
              {/* Navigation Links Section */}
              <div className={styles.mobileMenuNavigation}>
                {navLinks.map(renderNavItem)}
              </div>
              
              <div className={styles.mobileBottom}>
                {/* Call to Action Buttons Section */}
                <div className={styles.mobileMenuActions}>
                  <Link to="/get-involved/donate"  style={{
    textDecoration: "none",
    color: "inherit",
  }}
  onClick={closeMenu}>
                    <button className={`${styles.infoButton} ${styles.donateButton}`}>Donate</button>
                  </Link>
                  <Link to="/get-involved/volunteer"
                   style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  onClick={closeMenu}>
                  <button className={`${styles.infoButton} ${styles.memberButton}`}>Be a Member</button>
                  </Link>
                </div>
                
                {/* Social Media Icons Section */}
                <div className={styles.mobileMenuSocials}>
                  <a href="https://www.facebook.com/stemcells.foracure/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/foracurefoundation" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://x.com/foracure" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                    <img src={xIcon} alt="X" />
                  </a>
                  <a href="https://www.linkedin.com/company/for-a-cure-foundation/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                    <img src={linkedInIcon} alt="linkedIn" />
                  </a>
                </div>
              </div>
            </div>
        </div>
        )}
    </div>
    );
};

export default MobileNavbar; 