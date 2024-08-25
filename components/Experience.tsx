// components/Experience.tsx
import React from 'react';
import styles from './Experience.module.css';

const Experience = async () => {
  const data = [
    {
      title: 'Senior Software Developer',
      company: 'Times Network | Noida, India',
      date: 'Jan 2023 - Present',
      responsibilities: [
        'Projects: Timesnownews, Zoomtventertainment, Timesfoodie, Gadgettimes, ETNowNews, TimesDrive',
        "Collaborated with the Glance team, integrating Glance Pages and Mlib to enhance the platform's UI/UX using React in Web and AMP pages.",
        'Implemented API to store the data for played matches in AWS S3 bucket and Nodejs.',
        'Achieved a 45% increase in user engagement and a 20% boost in customer retention through advanced front-end development, using server-side rendering.',
        'Implemented SEO strategies resulting in a 20% increase in crawl rates, improving search engine visibility and user experience.',
        'Successfully integrated user engagement tools (GrowthRx, Chartbeat, PushEngage, Izooto) for actionable insights and improvements.',
        'Introduced short video features and templates, diversifying content and enriching the user experience.',
        'Monetized web pages through Google ad code integration, increasing revenue from various traffic sources.',
        'Simplified user registration and login with one-tap sign-in, enhancing user interactions and platform friendliness.',
        'Built and deployed Timesfoodie website from scratch using Nextjs.',
      ],
    },
    {
      title: 'Senior Software Developer',
      company: 'Infogain | Noida, India',
      date: 'Jan 2022 - Jan 2023',
      responsibilities: [
        'Projects: Timesnownews, Zoomtventertainment',
        'Spearheaded backend development using Node.js, crafting robust APIs for various templates.',
        'Implemented scalable solutions, integrating features like AWS S3 bucket for seamless content storage and retrieval.',
        'Leveraged Redis for efficient caching mechanisms, optimizing data retrieval and enhancing overall system performance.',
        'Collaborated on the seamless integration of Articles, video pages, and multiple templates.',
        'Ensured optimal functionality and performance of the App backend for an improved user experience.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Capgemini | Mumbai, India',
      date: 'April 2019 - Jan 2022',
      responsibilities: [
        'Project: IUW Document Management',
        'Collaborated on pre-release software projects, aligning frontend development with project timelines using Reactjs.',
      ],
    },
  ];

  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      {data.map((exp, index) => (
        <div key={index} className={styles.experienceCard}>
          <h3 className={styles.title}>{exp.title}</h3>
          <h4 className={styles.company}>{exp.company}</h4>
          <p className={styles.date}>{exp.date}</p>
          <ul className={styles.responsibilities}>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className={styles.responsibilityItem}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;