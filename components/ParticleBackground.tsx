'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

function Particles({ count }: ParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Generate random particle positions and velocities
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        scale: Math.random() * 0.3 + 0.1,
      });
    }
    return temp;
  }, [count]);

  // Mouse move handler
  const handleMouseMove = (event: MouseEvent) => {
    mouseRef.current = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    };
  };

  // Setup mouse listener
  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const matrix = new THREE.Matrix4();
    const color = new THREE.Color();

    particles.forEach((particle, i) => {
      // Update position with velocity
      particle.position.add(particle.velocity);

      // Bounce off boundaries
      if (Math.abs(particle.position.x) > 50) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 50) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 25) particle.velocity.z *= -1;

      // Add subtle floating animation
      const floatY = Math.sin(time + i * 0.1) * 0.2;
      const floatX = Math.cos(time + i * 0.15) * 0.15;

      // Apply mouse parallax (subtle)
      const parallaxX = mouseRef.current.x * particle.position.z * 0.02;
      const parallaxY = mouseRef.current.y * particle.position.z * 0.02;

      // Set position and scale
      matrix.setPosition(
        particle.position.x + floatX + parallaxX,
        particle.position.y + floatY + parallaxY,
        particle.position.z
      );
      matrix.scale(
        new THREE.Vector3(particle.scale, particle.scale, particle.scale)
      );

      if (meshRef.current) {
        meshRef.current.setMatrixAt(i, matrix);

        // Color based on depth (z position)
        const depthFactor = (particle.position.z + 25) / 50;
        color.setHSL(0.55 + depthFactor * 0.1, 0.8, 0.5 + depthFactor * 0.2);
        meshRef.current.setColorAt(i, color);
      }
    });

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
      if (meshRef.current.instanceColor) {
        meshRef.current.instanceColor.needsUpdate = true;
      }
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        transparent
        opacity={0.6}
        emissive="#00d4ff"
        emissiveIntensity={0.5}
        roughness={0.5}
        metalness={0.2}
      />
    </instancedMesh>
  );
}

function Connections({ count }: { count: number }) {
  const linesRef = useRef<THREE.LineSegments>(null);

  return null; // Simplified for performance - can add back with custom shader
}

const ParticleBackground = () => {
  const [particleCount, setParticleCount] = React.useState(100);

  React.useEffect(() => {
    const updateParticleCount = () => {
      setParticleCount(window.innerWidth < 768 ? 50 : 100);
    };
    
    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        <Particles count={particleCount} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
