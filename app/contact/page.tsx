// app/contact/page.tsx
import { NextSeo } from 'next-seo';
import Contact from '../../components/Contact';
import '../../styles/globals.css';

const ContactPage = async () => {
  return (
    <>
      {/* <NextSeo title="Contact - Suyash Gupta" description="Contact Suyash Gupta for further inquiries." /> */}
      <main className="main">
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;