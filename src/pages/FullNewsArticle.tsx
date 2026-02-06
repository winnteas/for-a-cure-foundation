import React from 'react';
import styles from './News.module.css';
import { Link } from 'react-router-dom';

const NewsPage: React.FC = () => (
  <div className={styles.root}>
    {/* Hero Section */}
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.categoryTag}>Stem Cell</div>
        <h1 className={styles.mainTitle}>Stem Cells: What They Are And What They Do</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.date}>Jun 08, 2025</div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            <div className={styles.stemCellVisualization}>
              <div className={styles.cellGroup}>
                <div className={styles.cell}></div>
                <div className={styles.cell}></div>
              </div>
              <div className={styles.dnaPatterns}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Article Content Area */}
    <div className={styles.articleSection}>
      <div className={styles.articleContainer}>
        {/* Left Sidebar - Share Section */}
        <div className={styles.sidebar}>
          <button className={styles.shareButton}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12L5 5V19L19 12Z" fill="currentColor"/>
            </svg>
            Share
          </button>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Article Content */}
        <div className={styles.articleContent}>
          <div className={styles.articleText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <blockquote className={styles.blockquote}>
              <div className={styles.quoteLine}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <cite>- John Doe, CEO & Founder</cite>
            </blockquote>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className={styles.articleImage}>
              <div className={styles.dnaVisualization}>
                <div className={styles.dnaHelix}></div>
              </div>
            </div>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>

            <ol className={styles.numberedList}>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
            </ol>

            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <Link to="#" className={styles.paginationLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </Link>
            <Link to="#" className={styles.paginationLink}>
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* You May Also Like Section */}
    <div className={styles.relatedSection}>
      <div className={styles.relatedContainer}>
        <h2 className={styles.relatedTitle}>YOU MAY ALSO LIKE</h2>
        <div className={styles.relatedGrid}>
          <div className={styles.relatedCard}>
            <div className={styles.cardImage}>
              <div className={styles.cellsVisualization}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardCategory} style={{backgroundColor: '#4CAF50'}}>Categories</div>
              <h3 className={styles.cardTitle}>Stem cells: What they are and what they do</h3>
              <div className={styles.cardDate}>Jun 08, 2025</div>
              <Link to="#" className={styles.readMoreLink}>
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.relatedCard}>
            <div className={styles.cardImage}>
              <div className={styles.cellsVisualization}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardCategory} style={{backgroundColor: '#FF8A65'}}>Donate</div>
              <h3 className={styles.cardTitle}>Stem cells: What they are and what they do</h3>
              <div className={styles.cardDate}>Jun 08, 2025</div>
              <Link to="#" className={styles.readMoreLink}>
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className={styles.relatedCard}>
            <div className={styles.cardImage}>
              <div className={styles.cellsVisualization}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardCategory} style={{backgroundColor: '#E91E63'}}>Event</div>
              <h3 className={styles.cardTitle}>Stem cells: What they are and what they do</h3>
              <div className={styles.cardDate}>Jun 08, 2025</div>
              <Link to="#" className={styles.readMoreLink}>
                Read More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewsPage; 