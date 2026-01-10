"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface RelicModelProps {
  scrollProgress: number;
  position: [number, number, number];
  scale: number;
  initialRotation: number;
}

function RelicModel({ scrollProgress, position, scale, initialRotation }: RelicModelProps) {
  const { scene } = useGLTF("/models/Relic.glb");
  const groupRef = useRef<THREE.Group>(null);
  const clonedScene = scene.clone();

  // Slow rotation on Y axis for Relic
  useFrame(() => {
    if (groupRef.current) {
      const targetRotationY = initialRotation + scrollProgress * 7.0;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.095
      );
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, initialRotation, 0]}>
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
      const intensity = THREE.MathUtils.lerp(1.1, 0.9, scrollProgress);
      directionalRef.current.intensity = intensity;
    }
  });

  return (
    <>
      <directionalLight
        ref={directionalRef}
        position={[7, 10, 4]}
        intensity={1.1}
        color="#ffffff"
      />
      <directionalLight
        position={[-2, 6, -2]}
        intensity={0.85}
        color="#f5f0eb"
      />
      <ambientLight intensity={0.35} color="#fafafa" />
    </>
  );
}

function Scene({ scrollProgress, position, scale, initialRotation }: RelicModelProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(-7.1, 1.9, 1.0);
    camera.lookAt(0.5, -0.45, -0.55);
  }, [camera]);

  return (
    <>
      <ArchitecturalLighting scrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <RelicModel 
          scrollProgress={scrollProgress} 
          position={position} 
          scale={scale}
          initialRotation={initialRotation}
        />
      </Suspense>
    </>
  );
}

interface RelicSceneProps {
  position?: [number, number, number];
  scale?: number;
  initialRotation?: number;
}

export default function RelicScene({ 
  position = [7.8, 9.9, 0], 
  scale = 50.6,
  initialRotation = 6.9
}: RelicSceneProps) {
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
        camera={{ fov: 3.1, near: 1, far: 100 }}
      >
        <Scene 
          scrollProgress={scrollProgress} 
          position={position} 
          scale={scale}
          initialRotation={initialRotation}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/Relic.glb");
