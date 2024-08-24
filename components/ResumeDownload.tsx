// components/ResumeDownload.tsx
import React from 'react';
import styles from './ResumeDownload.module.css';

const ResumeDownload = () => {
  return (
    <section className={styles.resumeDownload}>
      <h2>Resume</h2>
      <a href="/resume.pdf" className={styles.downloadLink} download="Suyash_Gupta_Resume.pdf">Download Resume</a>
    </section>
  );
};

export default ResumeDownload;