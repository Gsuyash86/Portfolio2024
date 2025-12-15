'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { use3DTilt } from '../hooks/use3DTilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  maxTilt?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  delay = 0,
  maxTilt = 5,
}) => {
  const { ref, style } = use3DTilt({ maxTilt, scale: 1.03, perspective: 1500 });

  return (
    <motion.div
      ref={ref}
      className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 shadow-glass hover:shadow-depth ${className}`}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Inner glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/0 via-transparent to-accent-blue/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default TiltCard;
