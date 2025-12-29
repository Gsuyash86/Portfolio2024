import { useRef, useEffect, useState } from 'react';

interface Tilt3DOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

export const use3DTilt = (options: Tilt3DOptions = {}) => {
  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      );
    };

    const handleMouseLeave = () => {
      setTransform('');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, scale]);

  return {
    ref,
    style: {
      transform,
      transition: transform ? 'none' : `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
      transformStyle: 'preserve-3d' as const,
    },
  };
};
