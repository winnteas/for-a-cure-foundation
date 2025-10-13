import React from 'react';
import styles from './OurPeople.module.css';
import { Link } from 'react-router-dom';
import angieImg from '../../assets/angie.png'; // Angie's image
import placeholderImg from '../../assets/partner.svg'; // Placeholder for other team members
import PageTitleSection from '../../components/PageTitleSection';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import linkedInIcon from '../../assets/icons/linkedin-navy.svg';

const teamMembers = [
  {
    id: 1,
    name: 'Angie Cleone',
    title: 'Founder and Chair',
    description: 'Visionary founder dedicated to advancing medical research, Angie leads the Foundation with unwavering passion, strategic insight, and a deep commitment to finding cures and supporting those im...',
    image: angieImg,
    hasMoreInfo: true
  },
  {
    id: 2,
    name: 'Dr Damodaron Kumar',
    title: 'Non-Executive Director',
    description: 'With a strong background in clinical research and health innovation, Dr Kumar provides strategic oversight and scientific insight to support the Foundation\'s mission of funding life-changing medical...',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 3,
    name: 'Dr Charles Galea',
    title: 'Non-Executive Director',
    description: 'Dr Galea brings academic rigour and research experience to the board, offering valuable guidance on science-led initiatives and ensuring robust governance in support of the Foundation...',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 4,
    name: 'Adam Fenech',
    title: 'Chief Executive Officer',
    description: 'A seasoned executive and change leader, Adam brings hands-on experience across financial services, innovation, and transformation, guiding the Foundation\'s growth, partnerships, and impact with c...',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 5,
    name: 'Ka Hei (Edgar) Koo',
    title: 'Company Secretary',
    description: 'Edgar plays a critical role in ensuring the Foundation\'s governance, legal, and compliance obligations are upheld, supporting the board with structured advice, reporting, and operational discipl.',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 6,
    name: 'Silvana Martins',
    title: 'Graphic Designer',
    description: 'Silvana brings creativity and compassion to the Foundation\'s visual identity, designing impactful graphics and campaign materials that communicate our purpose and inspire supporters to engag...',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 7,
    name: 'Winnie Tan',
    title: 'Website Developer',
    description: 'Winnie develops and maintains our digital platform, ensuring the website remains accessible, secure, and user-friendly-supporting our fundraising, research updates, and public engagement efforts....',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 8,
    name: 'Ivica Cuncic',
    title: 'Testing',
    description: 'Ivica provides essential technical support, ensuring all digital systems and features are thoroughly tested and optimised, helping deliver a smooth and reliable online experience for all users.',
    image: placeholderImg,
    hasMoreInfo: false
  },
  {
    id: 9,
    name: 'Jov Moratalla',
    title: 'Marketing',
    description: 'Jov shapes and executes marketing strategies that build awareness, drive campaigns, and connect supporters to our mission-bringing energy and creativity to everything from social medi.',
    image: placeholderImg,
    hasMoreInfo: false
  }
];

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'About Us', link: '/about'},
  { label: 'Our People', link: ''},
]

const OurPeople: React.FC = () => (
  <div className={styles.root}>
    <PageTitleSection title="Our People"/>
    <Breadcrumb items={breadcrumbItems}></Breadcrumb>
    
    <div className={styles.boardSection}>
      <h3 className={styles.sectionTitle}>Board and Team</h3>
      <p className={styles.sectionDescription}>
        The board and team at For A Cure Foundation generously give their time, skills, and commitment to accelerate life-changing medical research and fast-track cures that improve the lives of people affected by chronic and life-threatening diseases.
      </p>
      
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamCard}>
            <img src={member.image} alt={member.name} className={styles.memberImg} />
            <h4 className={styles.memberName}>{member.name}</h4>
            <p className={styles.memberTitle}>{member.title}</p>
            <p className={styles.memberDescription}>{member.description}</p>
            <div className={styles.cardFooter}>
              <div className={styles.frame}>
                <img src={linkedInIcon} alt="LinkedIn" />
              </div>
              {member.hasMoreInfo && (
                <Link to="/about/cleone-on-the-frontline" className={styles.moreAboutLink}>
                  More About +
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className={styles.volunteerSection}>
      <h3 className={styles.volunteerTitle}>Volunteer For A Cure</h3>
      <p className={styles.volunteerDescription}>
        Are you passionate about making a difference? For A Cure Foundation is seeking dedicated volunteers to support our mission in advancing stem cell research to find cures Join us and help drive hope, healing, and health breakthroughs.
      </p>
      <button className={styles.joinUsButton}>Join Us</button>
    </div>
  </div>
);

export default OurPeople; 