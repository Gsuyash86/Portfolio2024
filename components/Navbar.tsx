"use client";

import Link from 'next/link';
import styles from './Navbar.module.css';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isMenuOpen ? styles.bar1 : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.bar2 : ''}`}></span>
        <span className={`${styles.bar} ${isMenuOpen ? styles.bar3 : ''}`}></span>
      </div>
      <div className={`${styles.navItems} ${isMenuOpen ? styles.navItemsActive : ''}`}>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListActive : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/experience" onClick={closeMenu}>Experience</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/resume" download="Suyash_Gupta_Resume.pdf" onClick={closeMenu}>Resume</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/assests/Logo.png" alt="Suyash Gupta Logo" width={40} height={40} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;