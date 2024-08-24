// components/Projects.tsx
import React from 'react';

const Projects = async () => {
  // Simulating data fetching (replace with actual data fetching logic if needed)
  const projects = [
    {
      title: 'Medical Chat App',
      description: 'Created a medical chat app using React, Node, and MongoDB.',
    },
    {
      title: 'E-Commerce',
      description: 'Built an E-Commerce application for gaming peripherals and game blogs.',
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;