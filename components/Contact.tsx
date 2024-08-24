// components/Contact.tsx
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`${styles.contact} ${styles.fadeIn}`}>
      <h2 className={styles.heading}>Contact</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <h3 className={styles.label}>Location</h3>
          <p className={styles.info}>Noida, UP</p>
        </div>
        <div className={styles.contactItem}>
          <h3 className={styles.label}>Email</h3>
          <a className={styles.info} href="mailto:guptasuyash9@gmail.com">guptasuyash9@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <h3 className={styles.label}>Phone</h3>
          <a className={styles.info} href="tel:+917017460040">+91 7017460040</a>
        </div>
        <div className={styles.contactItem}>
          <h3 className={styles.label}>LinkedIn</h3>
          <a className={styles.info} href="https://www.linkedin.com/in/gsuyash1" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <div className={styles.contactItem}>
          <h3 className={styles.label}>GitHub</h3>
          <a className={styles.info} href="https://github.com/Gsuyash86" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;