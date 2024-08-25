// components/ResumeDownload.tsx
import React from 'react';
import styles from './ResumeDownload.module.css';

const ResumeDownload = () => {
  return (
    <section className={styles.resumeDownload}>
      <a 
        href="/resume.pdf" 
        className={styles.downloadLink} 
        download="Suyash_Gupta_Resume.pdf"
        aria-label="Download Suyash Gupta's Resume"
      >
        <span className={styles.downloadText}>Download Resume</span>
        <span className={styles.spinner}></span>
      </a>
    </section>
  );
};

export default ResumeDownload;  