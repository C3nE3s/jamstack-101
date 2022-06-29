import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

interface GlobeProps {}

const SphereMesh = () => {
  let gradientMap = useTexture("/images/ocean_gradient_mesh.png");
  const ref = useRef<any>();

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={ref} visible rotation={[0, 0, 0]}>
      <sphereGeometry args={[8, 50, 50]} />
      <meshStandardMaterial map={gradientMap} />
    </mesh>
  );
};

const Atmosphere = () => {
  return (
    <mesh visible rotation={[Math.PI / 12, -0.1, 0.75]} scale={[1.1, 1.1, 1.1]}>
      <sphereGeometry args={[8, 50, 50]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const Globe: React.FC = () => {
  return (
    <div className="w-3/4 md:w-full aspect-square">
      <Canvas
        camera={{
          fov: 75,
          aspect: 1,
          near: 0.1,
          far: 1000,
          position: [0, 0, 15],
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <SphereMesh />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Globe;
