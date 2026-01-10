"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

// Unified material and lighting constants
const STONE_COLOR = new THREE.Color(0.72, 0.69, 0.65);
const MATERIAL_ROUGHNESS = 0.92;
const MATERIAL_METALNESS = 0;

interface ModelProps {
  scrollProgress: number;
  modelPath: string;
  position: [number, number, number];
  scale: number;
  initialRotation: number;
}

function Model({ scrollProgress, modelPath, position, scale, initialRotation }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);
  const clonedScene = scene.clone();

  // Material override removed - using original model materials

  useFrame(() => {
    if (groupRef.current) {
      // Different motion per model path
      if (modelPath.includes('Buddha')) {
        // Subtle vertical float + gentle tilt for Buddha (meditative)
        const floatY = Math.sin(Date.now() * 0.0005) * 0.08;
        const tiltX = scrollProgress * 0.05;
        groupRef.current.position.y = position[1] + floatY;
        groupRef.current.rotation.x = tiltX;
      } else {
        // Original rotation for other models
        const targetRotationY = initialRotation + scrollProgress * 2.85;
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotationY,
          0.025
        );
      }
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

function UnifiedLighting({ scrollProgress }: { scrollProgress: number }) {
  const mainLightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    if (mainLightRef.current) {
      const intensity = THREE.MathUtils.lerp(1.1, 0.7, scrollProgress);
      mainLightRef.current.intensity = intensity;
    }
  });

  return (
    <>
      <directionalLight
        ref={mainLightRef}
        position={[6, 10, 4]}
        intensity={1.1}
        color="#ffffff"
      />
      <directionalLight
        position={[-4, 6, -2]}
        intensity={0.25}
        color="#f5f0eb"
      />
      <ambientLight intensity={0.35} color="#fafafa" />
    </>
  );
}

function SceneContent({ 
  scrollProgress, 
  modelPath, 
  position, 
  scale, 
  initialRotation 
}: ModelProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0.9, 5.3);
    camera.lookAt(0.5, -1.5, 0);
  }, [camera]);

  return (
    <>
      <UnifiedLighting scrollProgress={scrollProgress} />
      <Suspense fallback={null}>
        <Model
          scrollProgress={scrollProgress}
          modelPath={modelPath}
          position={position}
          scale={scale}
          initialRotation={initialRotation}
        />
      </Suspense>
    </>
  );
}

interface Scene3DProps {
  modelPath: string;
  position?: [number, number, number];
  scale?: number;
  initialRotation?: number;
}

export default function Scene3D({ 
  modelPath, 
  position = [2, -1.5, -0.5], 
  scale = 2, 
  initialRotation = -0.25 
}: Scene3DProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
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
        camera={{ fov: 45, near: 0.1, far: 100 }}
      >
        <SceneContent
          scrollProgress={scrollProgress}
          modelPath={modelPath}
          position={position}
          scale={scale}
          initialRotation={initialRotation}
        />
      </Canvas>
    </div>
  );
}

// Preload all models
useGLTF.preload("/models/Pythagoras.glb");
useGLTF.preload("/models/Buddha.glb");
useGLTF.preload("/models/Relic.glb");
