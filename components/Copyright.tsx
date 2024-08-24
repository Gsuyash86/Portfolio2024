import React from 'react';
import styles from './Copyright.module.css';

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {currentYear} Suyash Gupta. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Copyright;