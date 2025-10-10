import React from 'react';
import styles from './WhatWeDo.module.css';
import { Link } from 'react-router-dom';
import researchImg1 from '../../assets/about-us/generate-discoveries.svg'; // Scientist with petri dish
import researchImg2 from '../../assets/about-us/transforms-lives.svg'; // 
import VisionMissionValues from '../../features/visionmissionvalues/VisionMissionValues';
import PartnerWithUs from '../../features/partners/PartnerWithUs';
import PageTitleSection from '../../components/PageTitleSection';
import Button from '../../components/Button';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const WhatWeDoSection: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about/what-we-do'},
    { label: 'What We Do', link: ''},

  ]
  return (
  <div className={styles.root}>
    {/* Page Title Section */}
    <PageTitleSection title="What We Do" />

    {/* Science That Transforms Lives Section */}
    <div className={styles.scienceSection}>
      <div className={styles.scienceContainer}>
        <div className={styles.scienceLeft}>
          
    <Breadcrumb items={breadcrumbItems} whiteLinks={true}></Breadcrumb>
          <h2 className={styles.scienceTitle}>Science That Transforms Lives</h2>
          <p className={styles.scienceDescription}>
            We focus on stem cell research and regenerative medicine to find cures for life-threatening diseases. 
            Our foundation is dedicated to advancing scientific breakthroughs that can transform the lives of patients 
            and their families through innovative medical solutions.
          </p>
          <Link to="/research">
            <Button variant="primary">Discover Our Research</Button>
          </Link>
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
          <Link to="/get-involved/donate">
            <Button variant="primary">Donate Now</Button>
          </Link>
        </div>
      </div>
    </div>

 
    <div className="whiteDivider"></div>
    {/* Vision, Mission, Values Section */}
    <VisionMissionValues/>
    <div className="whiteDivider"></div>

    {/* Partner With Us Section */}
   <PartnerWithUs/>


  </div>
);
};

export default WhatWeDoSection; 