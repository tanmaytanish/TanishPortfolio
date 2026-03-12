import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers Component
const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Improve material appearance without changing original colors
  useEffect(() => {
    computer.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.metalness = 0.4;
        child.material.roughness = 0.35;

        // slightly brighten original colors
        if (child.material.color) {
          child.material.color.multiplyScalar(1.15);
        }
      }
    });
  }, [computer]);

  return (
    <mesh>
      {/* Lights */}
      <hemisphereLight intensity={0.6} groundColor="black" />

      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
      />

      <pointLight
        position={[0, 5, 5]}
        intensity={1.2}
      />

      {/* Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.65}
        position={isMobile ? [0, -1.5, -2.2] : [0, -2.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* 3D Model */}
        <Computers isMobile={isMobile} />

        {/* Environment Lighting */}
        <Environment preset="studio" />
      </Suspense>

      {/* Preload */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;