import React from 'react';
import Navbar from '../components/Navbar';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ResumeDownload from '../components/ResumeDownload';
import '../styles/globals.css';
import '../styles/animations.css';

const Home = async () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <h1 className="fadeIn">Welcome to My Portfolio</h1>
        <Experience />
        <Projects />
        <Contact />
        <ResumeDownload />
      </main>
    </>
  );
};

export default Home;