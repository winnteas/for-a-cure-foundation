import React from 'react';
import styles from './Hexagon.module.css';

interface HexagonProps {
  children?: React.ReactNode;
  variant?: 'icon' | 'stat';
  shift?: boolean;
  className?: string;
}

const Hexagon: React.FC<HexagonProps> = ({
  children,
  variant = 'icon',
  shift = false,
  className = '',
}) => {
  const bg = variant === 'stat' ? '#16597A' : '#F6FAFB';
  return (
    <div
      className={[
        styles.hex,
        variant === 'stat' ? styles.statHex : styles.iconHex,
        shift ? styles.shift : '',
        className,
      ].join(' ')}
      style={{ background: bg }}
    >
      {children}
    </div>
  );
};

export default Hexagon;