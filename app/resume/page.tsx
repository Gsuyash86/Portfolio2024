import React from 'react';
import Navbar from '../../components/Navbar';
import ResumeDownload from '../../components/ResumeDownload';
import '../../styles/globals.css';
import '../../styles/animations.css';

const ResumePage = async () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <ResumeDownload />
      </main>
    </>
  );
};

export default ResumePage;