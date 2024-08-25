"use client"

import React from 'react';
import ResumeDownload from '../../components/ResumeDownload';
import '../../styles/globals.css';
import '../../styles/animations.css';
import InquiryForm from '../../components/InquiryForm';
import { NextSeo } from 'next-seo';

const ResumePage = async () => {
  return (
    <>
     <NextSeo title="Resume - Suyash Gupta" description="Suyash Gupta's resume link." />
      <main className="main">
        <div className='resumeInquiry'>
        <InquiryForm />
        <ResumeDownload />
        </div>
      </main>
    </>
  );
};

export default ResumePage;