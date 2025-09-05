import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css'; 
import breadcrumbSeparator from '../../assets/breadcrumb-arrow.svg';

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  whiteLinks?: boolean; // Add this prop to control the color of the links
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, whiteLinks = false }) => {
  console.log(items);
  
  if (items.length === 0) return <div></div>;

  let currentPath = '';

  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      {items.map((item, index) => {

        currentPath += item.link;

        return (
          <React.Fragment key={index}>
            {/* Render the link if it's not the last item */}
            {index < items.length - 1 ? (
              <>
                <Link 
                  to={currentPath} 
                  className={whiteLinks ? styles.whiteLink : ''}
                >
                  {item.label}
                </Link>
                <img src={breadcrumbSeparator} className={styles.breadcrumbSeparator} alt="separator" />
              </>
            ) : (
              // If it's the current page, render as a span
              <span aria-current="page" className={styles.currentPage}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;