import React, { useState } from 'react';
import styles from './Volunteer.module.css';
import { Link } from 'react-router-dom';

const VolunteerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.root}>
      {/* Page Title Section */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Volunteer</h1>
          <nav className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <Link to="/get-involved" className={styles.breadcrumbLink}>Get Involved</Link>
            <span className={styles.breadcrumbSeparator}> &gt; </span>
            <span className={styles.breadcrumbCurrent}>Volunteer</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Volunteer With Us</h2>
            <p className={styles.heroDescription}>
              Join our passionate community of volunteers and help us make a real difference in the fight against disease. 
              Your time, skills, and dedication are invaluable to our mission of finding cures and supporting those affected.
            </p>
            <button className={styles.getStartedButton}>
              Get Started
            </button>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.volunteerGrid}>
              {Array.from({ length: 25 }, (_, i) => (
                <div key={i} className={styles.volunteerPhoto}>
                  <div className={styles.photoPlaceholder}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <div className={styles.whyVolunteerSection}>
        <div className={styles.whyVolunteerContainer}>
          <h2 className={styles.sectionTitle}>Why Volunteer With Us?</h2>
          <p className={styles.sectionDescription}>
            Discover the many benefits of joining our volunteer community and making a meaningful impact.
          </p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitNumber}>1</div>
              <h3 className={styles.benefitTitle}>Create Real Impact</h3>
              <p className={styles.benefitDescription}>
                Drive meaningful change and see the direct results of your contributions in advancing medical research and supporting patients.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitNumber}>2</div>
              <h3 className={styles.benefitTitle}>Meet Great People</h3>
              <p className={styles.benefitDescription}>
                Join a passionate community of like-minded individuals and expand your support network while building lasting friendships.
              </p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitNumber}>3</div>
              <h3 className={styles.benefitTitle}>Learn and Grow</h3>
              <p className={styles.benefitDescription}>
                Build new skills, gain valuable experience, and boost your confidence through hands-on involvement in meaningful work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqContent}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionDescription}>
              Get answers to common questions about volunteering with our foundation.
            </p>
          </div>
          
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <span>What kind of volunteer roles are available?</span>
                <div className={styles.faqIcon}>+</div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <span>Do I need any special skills to volunteer?</span>
                <div className={styles.faqIcon}>+</div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <span>How much time do I need to commit?</span>
                <div className={styles.faqIcon}>+</div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <span>Can I volunteer remotely?</span>
                <div className={styles.faqIcon}>+</div>
              </div>
            </div>
            
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion}>
                <span>Will I receive training or support?</span>
                <div className={styles.faqIcon}>+</div>
              </div>
              <div className={styles.faqAnswer}>
                Yes, all volunteers receive guidance and support to ensure you feel confident and valued.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>Let's Team Up</h2>
          <p className={styles.sectionDescription}>
            Ready to make a difference? Get in touch and let's discuss how you can contribute to our mission.
          </p>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="firstName" className={styles.formLabel}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>
              
              <div className={styles.formField}>
                <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>
              
              <div className={styles.formField}>
                <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formField}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.formTextarea}
                rows={4}
                placeholder="Tell us about your interests and how you'd like to volunteer..."
                required
              />
            </div>
            
            <div className={styles.formActions}>
              <button type="submit" className={styles.sendButton}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage; 