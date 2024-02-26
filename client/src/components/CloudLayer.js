import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const CloudLayer = () => {
  // Since the image is in the public folder, you can reference it directly by the path
  const cloudTexture = useLoader(THREE.TextureLoader, '/images/clouds.jpeg');
  cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;
  cloudTexture.repeat.set(1, 1);

  // Create a material with the cloud texture
  const cloudMaterial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
    opacity: 0.5,  // Adjusted for better visibility against the Earth
    depthWrite: false,
    side: THREE.DoubleSide // Render both sides of the geometry
  });

  // Create a sphere geometry slightly larger than the Earth
  return (
    <mesh scale={[1.01, 1.01, 1.01]}>
      <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
      <primitive attach="material" object={cloudMaterial} />
    </mesh>
  );
};

export default CloudLayer;
