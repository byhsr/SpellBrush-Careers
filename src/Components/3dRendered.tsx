import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import TexturedBase from "./TexturedBase";

const ThreedRender = () => {
  return (
    <Canvas camera={{ position: [0, 1, 1], fov: 50 }}>
      <ambientLight />
      <directionalLight position={[5, 25, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* <TexturedBase /> */}
      <OrbitControls 
        enableZoom={false}
  enablePan={false}
  enableRotate={true}
  autoRotate={false}
  maxPolarAngle={Math.PI /2}  // Limit vertical rotation
  minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default ThreedRender;
