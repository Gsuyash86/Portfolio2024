// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/resume" download="Suyash_Gupta_Resume.pdf">Download Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;