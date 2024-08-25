// components/Projects.tsx
import React from 'react';
import styles from './Projects.module.css';

const Projects = async () => {
  const projects = [
    {
      title: 'TimesGalaxy',
      description: `Created an application to store information related to Car, Bike and its variants, to create backend applications based on the latest car , bike available , also the upcoming, existing and vintage cars using Node, COSMODB and SQL`,
      image: '/assests/timesgalaxy.png',
      link : 'https://www.timesdrive.in/audi/q3',
    },
    {
      title: 'TimesDrive',
      description: `Created an application to show car, bike and lastest new related to automobiles, using React, Node`,
      image: '/assests/timesdrive.png',
      link : 'https://www.timesdrive.in',
    },
    {
      title: 'URL Shortener',
      description: `Create short URL for your project and return it to the developer using Nodejs, COSMODB`,
      image: '/assests/urlshortner.png',
      link : 'https://sh.tnn.in/page/',
    },
    {
      title: 'HealthAndMe',
      description: `Create a application find out information about your health and wellness, various medical conditions, connect with trustworthy resources, Using Nextjs, Node`,
      image: '/assests/healthandme.png',
      link : 'https://www.healthandme.com/',
    },
    {
      title: 'Medical Chat App',
      description: 'Created a medical chat app using React, Node, and MongoDB.',
      image: '/assests/project3.png',
      link : 'https://github.com/Gsuyash86/MedicalChatApp',
    },
    {
      title: 'E-Commerce',
      description: 'Built an E-Commerce application for gaming peripherals and game blogs.',
      image: '/assests/project2.png',
      link : 'https://github.com/Gsuyash86/e-commerce',
    },
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((proj, index) => (
          <div key={index} className={styles.projectCard}>
            <a href={proj.link} className={styles.linktype} target="_blank" rel="noopener noreferrer">
            <img className={styles.projectImage} src={proj.image} alt={proj.title} />
            <div className={styles.projectContent}>
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.description}>{proj.description}</p>
            </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;