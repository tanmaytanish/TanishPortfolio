import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, Component, type ReactNode } from "react";

import CanvasLoader from "../loader";
import { isWebGLAvailable } from "../../utils/webgl";

type ComputersProps = {
  isMobile: boolean;
};

// Error Boundary for catching WebGL/Three.js crashes
class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("[3D Model Error]:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

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

// Fallback for devices without WebGL or when model fails
const ComputersFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center px-6">
      <div className="text-6xl mb-4">💻</div>
      <p className="text-secondary text-sm">
        3D model not supported on this device
      </p>
    </div>
  </div>
);

// Canvas Component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());

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

  if (!webGLSupported) {
    return <ComputersFallback />;
  }

  return (
    <CanvasErrorBoundary fallback={<ComputersFallback />}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
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
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;