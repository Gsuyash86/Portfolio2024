import React from 'react';
import ResumeDownload from '../../components/ResumeDownload';
import '../../styles/globals.css';
import '../../styles/animations.css';
import InquiryForm from '../../components/InquiryForm';

const ResumePage = async () => {
  return (
    <>
      <main className="main">
        <InquiryForm />
        <ResumeDownload />
      </main>
    </>
  );
};

export default ResumePage;