import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotAuthorised.module.css';
import Button from '../../components/Button';

const NotAuthorised: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className={styles.title}>Access Denied</h1>
        <p className={styles.subtitle}>You are not authorised to view this page</p>
        <p className={styles.message}>
          Please log in with your admin credentials to access the dashboard.
        </p>
        <Link to="/admin/login" className={styles.buttonLink}>
          <Button variant="primary">Go to Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorised;