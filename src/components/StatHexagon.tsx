import React from 'react';
import Hexagon from './Hexagon';
import styles from '../pages/Home/ImpactStats.module.css';

interface StatHexagonProps {
  number: string;
  label: string;
  description: string;
  className?: string;
  [key: string]: any;
}

const StatHexagon: React.FC<StatHexagonProps> = ({ number, label, description, className = '', ...props }) => (
  <Hexagon variant="stat" className={className} {...props}>
    <div className={styles.statNumber}>{number}</div>
    <div className={styles.statLabel}>{label}</div>
    <div className={styles.statDescription}>{description}</div>
  </Hexagon>
);

export default StatHexagon; 