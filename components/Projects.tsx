// components/Projects.tsx
import React from 'react';
import styles from './Projects.module.css';

const Projects = async () => {
  // Simulating data fetching (replace with actual data fetching logic if needed)
  const projects = [
    {
      title: 'Medical Chat App',
      description: 'Created a medical chat app using React, Node, and MongoDB.',
      image: '/assests/project3.png', // Replace with actual image paths
    },
    {
      title: 'E-Commerce',
      description: 'Built an E-Commerce application for gaming peripherals and game blogs.',
      image: '/assests/project2.png', // Replace with actual image paths
    },
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className={styles.projectCard}>
          <img className={styles.projectImage} src={proj.image} alt={proj.title} />
          <div className={styles.projectContent}>
            <h3 className={styles.title}>{proj.title}</h3>
            <p className={styles.description}>{proj.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;