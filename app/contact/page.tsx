"use client"
import React from 'react';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import '../../styles/globals.css';
import '../../styles/animations.css';

const ContactPage = async () => {
  return (
    <>
      <NextSeo title="Contact - Suyash Gupta" description="Contact Suyash Gupta for further inquiries." />
      <main className="main">
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;