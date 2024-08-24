// app/projects/page.tsx
import { NextSeo } from 'next-seo';
import Projects from '../../components/Projects';
import '../../styles/globals.css';

const ProjectsPage = async () => {
  return (
    <>
      {/* <NextSeo title="Projects - Suyash Gupta" description="Suyash Gupta's projects showcasing his work in various fields." /> */}
      <main className="main">
        <Projects />
      </main>
    </>
  );
};

export default ProjectsPage;