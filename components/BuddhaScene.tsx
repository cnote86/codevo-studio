"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface BuddhaModelProps {
  scrollProgress: number;
  position: [number, number, number];
  scale: number;
}

function BuddhaModel({ scrollProgress, position, scale }: BuddhaModelProps) {
  const { scene } = useGLTF("/models/Buddha.glb");
  const groupRef = useRef<THREE.Group>(null);
  const clonedScene = scene.clone();

  // Subtle vertical float + gentle tilt, then spin at halfway scroll
  useFrame(() => {
    if (groupRef.current) {
      const floatY = Math.sin(Date.now() * 0.0005) * 0.09;
      const tiltX = scrollProgress * -0.55;
      const rotationY = scrollProgress > 0.5 ? (scrollProgress - 0.7) * 5.0 : 0; // Spin after 50% scroll
      groupRef.current.position.y = position[1] + floatY;
      groupRef.current.rotation.x = tiltX;
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]}>
      <Center>
        <primitive object={clonedScene} scale={scale} />
      </Center>
    </group>
  );
}

function ArchitecturalLighting({ scrollProgress }: { scrollProgress: number }) {
  const directionalRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (directionalRef.current) {
      const intensity = THREE.MathUtils.lerp(1.1, 0.7, scrollProgress);
      directionalRef.current.intensity = intensity;
    }
  });

  return (
    <>
      <directionalLight
        ref={directionalRef}
        position={[6, 10, 4]}
        intensity={1.0}
        color="#ffffff"
      />
      <directionalLight
        position={[4, 8, 2]}
        intensity={2.9}
        color="#f5f0eb"
      />
      <ambientLight intensity={0.35} color="#fafafa" />
    </>
  );
}

function Scene({ scrollProgress, position, scale }: BuddhaModelProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0.6, 5.3);
    camera.lookAt(0.12, -1.2, 0);
  }, [camera]);

  return (
    <>
      <ArchitecturalLighting scrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <BuddhaModel scrollProgress={scrollProgress} position={position} scale={scale} />
      </Suspense>
    </>
  );
}

interface BuddhaSceneProps {
  position?: [number, number, number];
  scale?: number;
}

export default function BuddhaScene({ 
  position = [3, -1.2, -0.2], 
  scale = 8.8 
}: BuddhaSceneProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollTop / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ fov: 55, near: 0.8, far: 100 }}
      >
        <Scene scrollProgress={scrollProgress} position={position} scale={scale} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/Buddha.glb");
