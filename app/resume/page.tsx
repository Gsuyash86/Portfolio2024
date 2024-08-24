import React from 'react';
import Navbar from '../../components/Navbar';
import ResumeDownload from '../../components/ResumeDownload';
import '../../styles/globals.css';
import '../../styles/animations.css';
import InquiryForm from '../../components/InquiryForm';

const ResumePage = async () => {
  return (
    <>
      <Navbar />
      
      <main className="main">
        <InquiryForm />
        <ResumeDownload />
      </main>
    </>
  );
};

export default ResumePage;