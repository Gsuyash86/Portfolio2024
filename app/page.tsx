// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

const Home = async () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.profileContainer}>
            <img
              className={styles.profileImage}
              src="/assests/profile.png" // Replace with your actual profile image path
              alt="Profile"
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.fadeIn}>Welcome to My Portfolio</h1>
            <div className={styles.about}>
              <p className={styles.fadeIn}>I'm a software engineer with a passion for technology and design.</p>
              <p className={styles.fadeIn}>I've worked on various projects in various industries, including software development, product management, and design.</p>
              <p className={styles.fadeIn}>Feel free to explore my portfolio, experience, and contact me for more information.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;