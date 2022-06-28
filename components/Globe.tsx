import { Canvas } from "@react-three/fiber";

interface GlobeProps {}

const Globe: React.FC = () => {
  return (
    <div className="w-[800px] h-[800px]">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
      `
    </div>
  );
};

export default Globe;
