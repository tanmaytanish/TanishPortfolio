import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Canvas, type ThreeElements, useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, Suspense, useState, useEffect } from "react";
import type { Points as PointsType } from "three";

import { isWebGLAvailable } from "../../utils/webgl";

// Stars
const Stars = (props: ThreeElements["points"]) => {
  const ref = useRef<any>(null);
  // For each star
  const [sphere] = useState(() => {
    const s = random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array;
    // Filter out NaN values if any
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) s[i] = 0;
    }
    return s;
  });

  // Rotate multiple stars
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points */}
      <Points
        ref={ref as any}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        {/* Each point material */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Stars Canvas
const StarsCanvas = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  // Stars are decorative — just hide them on unsupported devices
  if (!webGLSupported) return null;

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      {/* Canvas */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Show stars if not fallback */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        {/* preload all */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

