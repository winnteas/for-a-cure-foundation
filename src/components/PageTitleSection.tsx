import React from 'react';
import styles from './PageTitleSection.module.css';

type PageTitleSectionProps = {
  title: string;
  children?: React.ReactNode;
};

const PageTitleSection: React.FC<PageTitleSectionProps> = ({ title, children }) => (
  <div className={styles.pageTitleSection}>
    <div className={styles.pageTitleContainer}>
      <h1 className={styles.pageTitle}>{title}</h1>
      {children}
    </div>
  </div>
);

export default PageTitleSection; 