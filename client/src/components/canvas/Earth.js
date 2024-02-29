import { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from 'three';


const Earth = () => {
  const earthRef = useRef();
  const earth = useLoader(THREE.GLTFLoader, './planet/scene.gltf');
  useFrame(() => {
    earthRef.current.rotation.y += 0.001; // Rotate the Earth
  });

  return (
    <primitive ref={earthRef} object={earth.scene} scale={1} position={[0, 0, 0]} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas style={{ zIndex: -5, position: "relative" }}
      camera={{ position: [0, 0, -5], fov: 25 }} // Start with the camera further back
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
        <OrbitControls enableZoom={true} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
