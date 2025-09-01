import React from 'react';
import styles from './OurFriends.module.css';
import { Link } from 'react-router-dom';

// Import sponsor images
import sponsor2gb from '../../assets/sponsors/2gb.svg';
import sponsorDoyles from '../../assets/sponsors/doyles.svg';
import sponsorMccables from '../../assets/sponsors/mccables.svg';
import sponsorSunbury from '../../assets/sponsors/sunbury.svg';
import sponsorJfk from '../../assets/sponsors/jfk.svg';

const OurFriendsPage: React.FC = () => {
  return (
    <div className={styles.root}>
      {/* Page Title Section */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleContainer}>
          <nav className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <Link to="/get-involved" className={styles.breadcrumbLink}>Get Involved</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <span className={styles.breadcrumbCurrent}>Our Friends</span>
          </nav>
          <h1 className={styles.pageTitle}>Our Friends</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.introSection}>
            <h2 className={styles.introTitle}>Lorem Ipsum Is Simply Dummy Text Of The Printing</h2>
            <p className={styles.introDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className={styles.partnersGrid}>
            {/* Row 1 */}
            <div className={styles.partnerLogo}>
              <img src={sponsor2gb} alt="2GB Sydney" className={styles.logoImage} />
            </div>
            
            <div className={styles.partnerLogo}>
              <img src={sponsorDoyles} alt="Doyles EST 1885" className={styles.logoImage} />
            </div>
            
            <div className={styles.partnerLogo}>
              <img src={sponsorMccables} alt="MC" className={styles.logoImage} />
            </div>
            
            <div className={styles.partnerLogo}>
              <div className={styles.felliaMelasLogo}>
                <span className={styles.felliaText}>fellia</span>
                <div className={styles.verticalLines}>
                  <div className={styles.verticalLine}></div>
                  <div className={styles.verticalLine}></div>
                </div>
                <span className={styles.melasText}>melas</span>
                <span className={styles.galleryText}>gallery</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className={styles.partnerLogo}>
              <div className={styles.alchemyPartnersLogo}>
                <div className={styles.alchemyIcon}>A</div>
                <span className={styles.alchemyText}>Alchemy Partners</span>
              </div>
            </div>
            
            <div className={styles.partnerLogo}>
              <div className={styles.morganBoxingLogo}>
                <div className={styles.starsContainer}>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                </div>
                <span className={styles.morganText}>MORGAN</span>
                <span className={styles.boxingText}>BOXING & FITNESS EQUIPMENT</span>
              </div>
            </div>
            
            <div className={styles.partnerLogo}>
              <img src={sponsorJfk} alt="JFK Automation" className={styles.logoImage} />
            </div>
            
            <div className={styles.partnerLogo}>
              <img src={sponsorSunbury} alt="Sunbury Primary School" className={styles.logoImage} />
            </div>

            {/* Row 3 */}
            <div className={styles.partnerLogo}>
              <div className={styles.nswTafeLogo}>
                <div className={styles.nswGovernmentLogo}>
                  <div className={styles.nswCircle}>
                    <span className={styles.nswText}>NSW</span>
                  </div>
                </div>
                <span className={styles.tafeText}>TAFE</span>
              </div>
            </div>
            
            <div className={styles.partnerLogo}>
              <div className={styles.lionsDenLogo}>
                <div className={styles.lionIcon}>
                  <div className={styles.lionHead}></div>
                </div>
                <span className={styles.lionsDenText}>LION'S DEN ACADEMY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFriendsPage; 