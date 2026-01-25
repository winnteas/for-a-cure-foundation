import React from 'react';
import styles from './OurFriends.module.css';
import { Link } from 'react-router-dom';
import PageTitleSection from '../../components/PageTitleSection';

import mccables from '../../assets/sponsors/mccables.svg';
import doyles from '../../assets/sponsors/doyles.svg';
import twogb from '../../assets/sponsors/2gb.svg';
import sunbury from '../../assets/sponsors/sunbury.svg';
import jfk from '../../assets/sponsors/jfk.svg';
import tafe from '../../assets/sponsors/tafe.svg';
import morgan from '../../assets/sponsors/morgan.svg';
import alchemy from '../../assets/sponsors/alchemy-partners.svg';
import fellia from '../../assets/sponsors/fellia-melas-gallery.svg';
import lionsden from '../../assets/sponsors/lions-den-academy.svg';
import distinctly from '../../assets/sponsors/distinctly.png';
import avantevo from '../../assets/sponsors/avantevo.jpg'

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const OurFriendsPage: React.FC = () => {

  const sponsors = [
    { src: sunbury, alt: 'Sunbury Primary School' },
    { src: twogb, alt: '2GB Sydney' },
    { src: doyles, alt: 'Doyles' },
    { src: mccables, alt: 'MC Cables' },
    { src: jfk, alt: 'JFK Automation' },
    { src: tafe, alt: 'TAFE' },
    { src: morgan, alt: 'Morgan Boxing' },
    // { src: alchemy, alt: 'Alchemy Partners' },
    { src: fellia, alt: 'Fellia Melas Gallery' },
    { src: lionsden, alt: "Lion's Den Academy" },
      { src: avantevo, alt: "Avantevo" },
  { src: distinctly, alt: "Distinctly" },
    
  ];

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Get Involved', link: "/get-involved" },
    { label: 'Our Friends', link: ""}

  ]
  return (
    <div className={styles.root}>
      {/* Page Title Section */}
      <PageTitleSection title="Our Friends"/>
      <Breadcrumb items={breadcrumbItems}></Breadcrumb>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.introSection}>
            <h2 className={styles.introTitle}>Celebrating Those Who Stand With Us</h2>
            <p className={styles.introDescription}>
            We’re deeply grateful to the generous individuals, businesses, and partners whose time, donations, and expertise help us advance research, inspire hope, and create lasting change.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className={styles.partnersGrid}>
          {sponsors.map((s, i) => (
                <img key={i} src={s.src} alt={s.alt} className={styles.logoImage} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFriendsPage; 