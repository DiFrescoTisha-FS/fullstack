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

const CloudLayer = () => {
  const cloudTexture = useLoader(THREE.TextureLoader, './clouds.png');
  cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;
  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    side: THREE.DoubleSide
  });

  return (
    <mesh scale={[1.01, 1.01, 1.01]}>
      <sphereBufferGeometry attach="geometry" args={[1.005, 64, 64]} />
      <primitive attach="material" object={cloudMaterial} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 25 }} // Start with the camera further back
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
        <CloudLayer />
        <OrbitControls enableZoom={true} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
