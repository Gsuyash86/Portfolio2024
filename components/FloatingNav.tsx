'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group relative"
          aria-label={`Navigate to ${label}`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === id
                ? 'bg-accent-cyan shadow-glow-cyan scale-125'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.5 }}
          />
          <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20 shadow-lg">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
