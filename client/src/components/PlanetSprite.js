import React from 'react'; // Base React import
import * as THREE from 'three'; // Importing Three.js for various 3D functionalities
import { useLoader } from '@react-three/fiber';

const PlanetSprite = ({ imageUrl, position }) => {
    const texture = useLoader(THREE.TextureLoader, imageUrl);
    return (
      <sprite position={position}>
        <spriteMaterial attach="material" map={texture} />
      </sprite>
    );
};
  
export default PlanetSprite;
  