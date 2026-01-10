"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface PythagorasModelProps {
  scrollProgress: number;
}

function PythagorasModel({ scrollProgress }: PythagorasModelProps) {
  const { scene } = useGLTF("/models/Pythagoras.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Clone scene to avoid mutation issues
  const clonedScene = scene.clone();

  // Material override removed - using original model materials

  // Scroll-driven motion only
  useFrame(() => {
    if (groupRef.current) {
      // Subtle rotation based on scroll
      const targetRotationY = -0.3 + scrollProgress * 0.2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.03
      );
    }
  });

  return (
    <group ref={groupRef} position={[2.5, -2, -1]} rotation={[0, -0.3, 0]}>
      <Center>
        <primitive object={clonedScene} scale={2.2} />
      </Center>
    </group>
  );
}

function ArchitecturalLighting({ scrollProgress }: { scrollProgress: number }) {
  const directionalRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (directionalRef.current) {
      const intensity = THREE.MathUtils.lerp(1.2, 0.8, scrollProgress);
      directionalRef.current.intensity = intensity;
    }
  });

  return (
    <>
      <directionalLight
        ref={directionalRef}
        position={[8, 10, 5]}
        intensity={1.2}
        color="#ffffff"
      />
      <directionalLight
        position={[-5, 5, -3]}
        intensity={0.3}
        color="#f0ebe6"
      />
      <ambientLight intensity={0.4} color="#f5f5f5" />
    </>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1, 6);
    camera.lookAt(1, 0, 0);
  }, [camera]);

  return (
    <>
      <ArchitecturalLighting scrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <PythagorasModel scrollProgress={scrollProgress} />
      </Suspense>
    </>
  );
}

export default function PythagorasScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollTop / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ fov: 50, near: 0.1, far: 100 }}
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/Pythagoras.glb");
