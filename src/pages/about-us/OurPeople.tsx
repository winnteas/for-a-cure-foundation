import React from 'react';
import styles from './OurPeople.module.css';
import { Link } from 'react-router-dom';
import angieImg from '../../assets/people/angie.svg';
import adamImg from '../../assets/people/adam.svg';
import charlesImg from '../../assets/people/charles.svg';
import edgarImg from '../../assets/people/edgar.svg';
import ivicaImg from '../../assets/people/ivica.svg';
import damodaronImg from '../../assets/people/damodaron.svg';
import placeholderImg from '../../assets/people/blank.svg'; // Placeholder for other team members
import PageTitleSection from '../../components/PageTitleSection';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import linkedInIcon from '../../assets/icons/linkedin-navy.svg';
import volunteerImg from '../../assets/volunteer/volunteers.svg'

const teamMembers = [
  {
    id: 1,
    name: 'Angie Cleone',
    title: 'Founder & Chair | Executive Director',
    description: 'Visionary founder dedicated to advancing medical research, Angie leads the Foundation with unwavering passion, strategic insight, and a deep commitment to finding cures.',
    image: angieImg,
    hasMoreInfo: true,
    linkedIn: 'https://www.linkedin.com/in/angie-cleone-2406516/'
  },
  {
    id: 2,
    name: 'Dr Prem Kumar',
    title: 'Non-Executive Director',
    description: 'With a strong background in clinical research and health innovation, Dr Kumar provides strategic oversight and scientific insight to support our mission of funding life-changing medical breakthroughs.',
    image: damodaronImg,
    hasMoreInfo: false,
    linkedIn: 'https://www.linkedin.com/in/prem-kumar-damodaran-13b929136/?originalSubdomain=au'
  },
  {
    id: 3,
    name: 'Dr Charles Galea',
    title: 'Non-Executive Director',
    description: 'Dr Galea brings academic rigour and research experience, offering valuable guidance on science-led initiatives and ensuring robust governance in support of the Foundation’s purpose.',
    image: charlesImg,
    hasMoreInfo: false,
    linkedIn: 'https://www.linkedin.com/in/charles-galea-data-scientist/'
  },
  {
    id: 4,
    name: 'Adam Fenech',
    title: 'Managing Director',
    description: 'Adam is a seasoned executive with experience in financial services, innovation, and transformation, driving the Foundation’s growth, partnerships, and impact, with care and compassion.',
    image: adamImg,
    hasMoreInfo: false,
    linkedIn: 'https://www.linkedin.com/in/adam-fenech/'
  },
  {
    id: 5,
    name: 'Ka Hei (Edgar) Koo',
    title: 'Company Secretary',
    description: 'Edgar ensures the Foundation’s compliance, governance, and reporting obligations are met with professionalism and precision, supporting transparent operations and board effectiveness.',
    image: edgarImg,
    hasMoreInfo: false,
    linkedIn: 'https://www.linkedin.com/in/edgar-koo-04092124/'
  },
  {
    id: 6,
    name: 'Our Amazing Team of Volunteers',
    title: '',
    description: '',
    image: volunteerImg,
    hasMoreInfo: false,
  },
  // {
  //   id: 6,
  //   name: 'Silvana Martins',
  //   title: 'Graphic Designer',
  //   description: 'Silvana brings creativity and compassion to the Foundation\'s visual identity, designing impactful graphics and campaign materials that communicate our purpose and inspire supporters to engag...',
  //   image: placeholderImg,
  //   hasMoreInfo: false
  // },
  // {
  //   id: 7,
  //   name: 'Winnie Tan',
  //   title: 'Website Developer',
  //   description: 'Winnie develops and maintains our digital platform, ensuring the website remains accessible, secure, and user-friendly-supporting our fundraising, research updates, and public engagement efforts....',
  //   image: placeholderImg,
  //   hasMoreInfo: false
  // },
  // {
  //   id: 8,
  //   name: 'Ivica Cuncic',
  //   title: 'Testing',
  //   description: 'Ivica provides essential technical support, ensuring all digital systems and features are thoroughly tested and optimised, helping deliver a smooth and reliable online experience for all users.',
  //   image: ivicaImg,
  //   hasMoreInfo: false
  // },
  // {
  //   id: 9,
  //   name: 'Jov Moratalla',
  //   title: 'Marketing',
  //   description: 'Jov shapes and executes marketing strategies that build awareness, drive campaigns, and connect supporters to our mission-bringing energy and creativity to everything from social medi.',
  //   image: placeholderImg,
  //   hasMoreInfo: false
  // }
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
          <div className={styles.imageWrapper}>
            <img src={member.image} alt={member.name} className={styles.memberImg} />
          </div>
          <div className={styles.textWrapper}>
          <p className={styles.memberName}>{member.name}</p>
          <p className={styles.memberTitle}>{member.title}</p>
          <p className={styles.memberDescription}>{member.description}</p>
          <div className={styles.cardFooter}>
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.frame}
              >
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
            )}
            {member.hasMoreInfo && (
              <Link
                to="/about/cleone-on-the-frontline"
                className={styles.moreAboutLink}
              >
                More About +
              </Link>
            )}
          </div>
        </div>
        </div>
        
        ))}
      </div>
    </div>
    
    <div className={styles.volunteerSection}>
      <h3 className={styles.volunteerTitle}>Volunteer For A Cure</h3>
      <p className={styles.volunteerDescription}>
        Are you passionate about making a difference? For A Cure Foundation is seeking dedicated
volunteers to support our mission in advancing scientific research to find cures Join us and
help drive hope, healing, and health breakthroughs.
      </p>
      <button className={styles.joinUsButton}>Join Us</button>
    </div>
  </div>
);

export default OurPeople; 