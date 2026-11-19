import React from 'react';
import styles from './Research.module.css';
import cancerIcon from '../assets/research/cancer.svg';
import diabetesIcon from '../assets/research/diabetes.svg';
import heartDiseaseIcon from '../assets/research/heart-disease.svg';
import brainIcon from '../assets/research/brain.svg';
import arthritisIcon from '../assets/research/arthritis.svg';
import spinalCordIcon from '../assets/research/spinal-cord.svg';
// import researchImage from '../../assets/research/research.svg'; // File too large, using placeholder
import scientistImage from '../assets/research/research.svg'; // Using angie.png for the scientist image
import { Link } from 'react-router-dom';
import ImpactStats from '../features/impact-stats/ImpactStats';
import PageTitleSection from '../components/PageTitleSection';
import Button from '../components/Button/Button';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'Research', link: ''},
]

const ResearchPage: React.FC = () => (
  
  <div className={styles.root}>
    {/* Hero/Banner Section */}
    <PageTitleSection title="Research" />

    <Breadcrumb items={breadcrumbItems}></Breadcrumb>

    {/* Stem Cells For A Cure Section */}
    <div className={styles.stemCellsSection}>
      <h3 className={styles.sectionTitle}>Stem Cells For A Cure</h3>
      <div className={styles.contentGrid}>
        <div className={styles.textColumn}>
          <p className={styles.researchText}>
            Stem cell research is the study of unique, unspecialised cells that can develop into different body cell types. 
            These cells serve as raw materials, capable of dividing, renewing, and becoming specific cells such as muscle, 
            nerve, or blood cells.
          </p>
          <p className={styles.researchText}>
            Researchers use stem cells (embryonic, adult, induced pluripotent) to understand disease development, 
            tissue regeneration, and healing processes.
          </p>
        </div>
        <div className={styles.textColumn}>
          <p className={styles.researchText}>
            Stem cell research holds immense potential for medical breakthroughs, including new treatments for cancer, 
            diabetes, Parkinson's disease, spinal cord injuries, and heart disease.
          </p>
          <p className={styles.researchText}>
            Scientists are investigating stem cells to repair and replace damaged tissues and organs, aiming to cure 
            untreatable conditions and offering hope for regenerative medicine.
          </p>
        </div>
      </div>
      <div className={styles.researchImageContainer}>
      <div className={styles.researchImageSquare}>
        <img src={scientistImage} alt="Stem cells" />
      </div>
    </div>
    </div>

    {/* Scientific Activity Areas Section */}
    <div className={styles.scientificActivitySection}>
      <h3 className={styles.sectionTitle}>Some Areas Of Scientific Activity</h3>
      <p className={styles.sectionSubtitle}>
        Join us in supporting cutting-edge research that brings us closer to a cure.
      </p>
      <Link to="/get-involved/donate">
         <Button variant="primary">Support Our Research</Button>
      </Link>
      
      <div className={styles.researchAreasGrid}>
        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={cancerIcon} alt="Cancer research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Cancer</h4>
          <p className={styles.researchAreaText}>
            Targeted therapies, immunotherapy, and early detection methods.
          </p>
        </div>

        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={diabetesIcon} alt="Diabetes research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Diabetes</h4>
          <p className={styles.researchAreaText}>
            Regenerate insulin-producing cells, reverse insulin resistance, and prevent complications.
          </p>
        </div>

        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={heartDiseaseIcon} alt="Heart disease research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Heart Disease</h4>
          <p className={styles.researchAreaText}>
            Stem cell therapy, tissue engineering, and gene editing to repair damaged heart tissue.
          </p>
        </div>

        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={brainIcon} alt="Parkinson's research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Parkinson's</h4>
          <p className={styles.researchAreaText}>
            Regenerate dopamine-producing neurons and halt neurodegeneration.
          </p>
        </div>

        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={arthritisIcon} alt="Arthritis research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Arthritis</h4>
          <p className={styles.researchAreaText}>
            Cartilage regeneration, inflammation reduction, and immune system modulation.
          </p>
        </div>

        <div className={styles.researchArea}>
          <div className={styles.researchIcon}>
            <img src={spinalCordIcon} alt="Spinal cord injury research" />
          </div>
          <h4 className={styles.researchAreaTitle}>Spinal Cord Injuries</h4>
          <p className={styles.researchAreaText}>
            Develop regenerative treatments to reconnect nerve pathways.
          </p>
        </div>
      </div>
    </div>

    {/* Contribution Section */}
    <ImpactStats/>
    
  </div>
);

export default ResearchPage; 