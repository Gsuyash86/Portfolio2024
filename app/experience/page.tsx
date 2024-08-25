"use client"
import { NextSeo } from 'next-seo';
import React from 'react';
import Experience from '../../components/Experience';
import '../../styles/globals.css';
import '../../styles/animations.css';

const ExperiencePage = async () => {
  return (
    <>
   <NextSeo title="Experience - Suyash Gupta" description="Suyash Gupta's experience working as Full Stack developer" />
    <main className="main">
      <Experience />
    </main>
  </>
  );
};

export default ExperiencePage;