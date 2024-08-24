"use client"
import { NextSeo } from 'next-seo';
import React from 'react';
import Navbar from '../../components/Navbar';
import Experience from '../../components/Experience';
import '../../styles/globals.css';
import '../../styles/animations.css';

const ExperiencePage = async () => {
  return (
    <>
    <Navbar />
    <main className="main">
      <Experience />
    </main>
  </>
  );
};

export default ExperiencePage;