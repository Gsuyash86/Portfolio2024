// app/experience/page.tsx
import { NextSeo } from 'next-seo';
import Experience from '../../components/Experience';
import '../../styles/globals.css';

const ExperiencePage = async () => {
  return (
    <>
      {/* <NextSeo title="Experience - Suyash Gupta" description="Suyash Gupta's work experience in software development." /> */}
      <main className="main">
        <Experience />
      </main>
    </>
  );
};

export default ExperiencePage;