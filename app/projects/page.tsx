"use client"

import { NextSeo } from 'next-seo';
import React from 'react';
import Projects from '../../components/Projects';
import Navbar from '../../components/Navbar';
import '../../styles/globals.css';
import '../../styles/animations.css';

const ProjectsPage = async () => {
  return (
    <>
      <NextSeo title="Projects - Suyash Gupta" description="Suyash Gupta's projects showcasing his work in various fields." />
      <Navbar />
      <main className="main">
        <Projects />
      </main>
    </>
  );
};

export default ProjectsPage;