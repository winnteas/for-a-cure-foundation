import React from 'react';
import styles from './ImpactStats.module.css';
import donationBoxIcon from '../../assets/icons/impact-stats/donation-box.svg';
import handshakeIcon from '../../assets/icons/impact-stats/handshake.svg';
import microscopeIcon from '../../assets/icons/impact-stats/microscope.svg';
import networkIcon from '../../assets/icons/impact-stats/network.svg';
import briefcaseIcon from '../../assets/icons/impact-stats/briefcase.svg';
import Hexagon from '../../components/Hexagon';
import StatHexagon from '../../components/StatHexagon';

interface Stat {
  label: string;
  value: string;
  desc: string;
}

const stats: Stat[] = [
  { label: 'Research Projects', value: '120+', desc: 'Supported across institutions worldwide.' },
  { label: 'Clinical Trials', value: '30+', desc: 'Accelerating therapies from the lab to the clinic.' },
  { label: 'Researchers Funded', value: '50+', desc: 'Leading scientists working on stem cell research.' },
  { label: 'Raised', value: '$15M+', desc: 'Funds invested directly into research.' },
  { label: 'Donors', value: '5,000+', desc: 'Individuals and organizations funding a cure.' }
];

const ImpactStats: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className="sectionTitle">
        <span className={styles.smallText}>Your Contribution</span>
        <span className="largeText">Makes All The Difference</span>
      </h2>
      <div className={styles.honeycomb}>
         <div className={styles.row}>
            <Hexagon>1</Hexagon>
            <Hexagon>2</Hexagon>
            <Hexagon>3</Hexagon>
          </div>
        <div className={styles.hexGrid}>
          {/* Top row: 4 icon hexes, shifted */}
          {/* <Hexagon variant="icon" shift><img src={donationBoxIcon} alt="Donation Box" /></Hexagon>
          <Hexagon variant="icon" shift><img src={handshakeIcon} alt="Handshake" /></Hexagon>
          <Hexagon variant="icon" shift><img src={microscopeIcon} alt="Microscope" /></Hexagon>
          <Hexagon variant="icon" shift><img src={networkIcon} alt="Network" /></Hexagon> */}
      
          <StatHexagon number="$15M+" label="Raised" description="Funds invested directly into life-saving research." />
          <StatHexagon number="120+" label="Research Projects" description="Supported across multiple institutions worldwide." />
          <StatHexagon number="5,000+" label="Donors" description="Individuals and organisation committed to finding a cure." />
          <StatHexagon number="30+" label="Clinical Trials" description="Accelerating the path to new treatments." />
          <StatHexagon number="50+" label="Researchers Funded" description="Leading scientists dedicated to making a difference." />
          {/* Bottom row: 4 icon hexes, shifted */}
          {/* <Hexagon variant="icon" shift><img src={briefcaseIcon} alt="Briefcase" /></Hexagon>
          <Hexagon variant="icon" shift><img src={donationBoxIcon} alt="Donation Box" /></Hexagon>
          <Hexagon variant="icon" shift><img src={handshakeIcon} alt="Handshake" /></Hexagon>
          <Hexagon variant="icon" shift><img src={microscopeIcon} alt="Microscope" /></Hexagon> */}
        </div>
      </div>
    </div>
  </section>
);

export default ImpactStats; 