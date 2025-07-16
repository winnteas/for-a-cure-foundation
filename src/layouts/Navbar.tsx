import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/for-a-cure-logo.svg';
import dropdownIcon from '../assets/icons/dropdown.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import xIcon from '../assets/icons/x.svg';
import mailIcon from '../assets/icons/mail.svg';
import phoneIcon from '../assets/icons/phone.svg';
import compactLogo from '../assets/icons/compact-logo.svg';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Mobile Navbar (visible on tablets/mobile via CSS) */}
      <MobileNavbar/>
      {/* Desktop Navbar (visible on desktop via CSS) */}
      <DesktopNavbar />
    </>
  );
};

export default Navbar; 