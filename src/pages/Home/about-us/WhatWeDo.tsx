import React from 'react';
import styles from './WhatWeDo.module.css';
import { Link } from 'react-router-dom';
import researchImg1 from '../../../assets/about-us/generate-discoveries.svg'; // Scientist with petri dish
import researchImg2 from '../../../assets/about-us/transforms-lives.svg'; // 
import heartImg from '../../../assets/partner.png'; // Partnership image
import VisionMissionValues from '../../../features/visionmissionvalues/VisionMissionValues';
import PartnersSection from '../../../features/partners/PartnersSection';
import PartnerWithUs from '../../../features/partners/PartnerWithUs';

const WhatWeDoSection: React.FC = () => (
  <div className={styles.root}>
    {/* Page Title Section */}
    <div className={styles.pageTitleSection}>
      <div className={styles.pageTitleContainer}>
        <h1 className={styles.pageTitle}>What We Do</h1>
      </div>
    </div>

    {/* Science That Transforms Lives Section */}
    <div className={styles.scienceSection}>
      <div className={styles.scienceContainer}>
        <div className={styles.scienceLeft}>
          <nav className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <Link to="/about" className={styles.breadcrumbLink}>About Us</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <span className={styles.breadcrumbCurrent}>What We Do</span>
          </nav>
          <h2 className={styles.scienceTitle}>Science That Transforms Lives</h2>
          <p className={styles.scienceDescription}>
            We focus on stem cell research and regenerative medicine to find cures for life-threatening diseases. 
            Our foundation is dedicated to advancing scientific breakthroughs that can transform the lives of patients 
            and their families through innovative medical solutions.
          </p>
          <button className={styles.discoverButton}>
            Discover Our Research
          </button>
        </div>
        <div className={styles.scienceRight}>
          {/* <div className={styles.scienceImageContainer}> */}
            <img src={researchImg1} alt="Scientist working with petri dish in laboratory" className={styles.scienceImage} />
          {/* </div> */}
        </div>
      </div>
    </div>

    {/* Donations That Generate Discoveries Section */}
    <div className={styles.donationsSection}>
      <div className={styles.donationsContainer}>
        <div className={styles.donationsLeft}>
            <img src={researchImg2} alt="Group of scientists collaborating in laboratory" className={styles.donationsImage} />

        </div>
        <div className={styles.donationsRight}>
          <h2 className={styles.donationsTitle}>Donations That Generate Discoveries</h2>
          <p className={styles.donationsDescription}>
            Your donations fund cutting-edge stem cell research and are directed to laboratories where they drive 
            significant advances. Every contribution helps accelerate the development of life-saving treatments and 
            brings us closer to finding cures for devastating diseases.
          </p>
          <button className={styles.donateButton}>
            Donate Now
          </button>
        </div>
      </div>
    </div>

 

    {/* Vision, Mission, Values Section */}
    <VisionMissionValues/>

    {/* Partner With Us Section */}
   <PartnerWithUs/>


  </div>
);

export default WhatWeDoSection; 