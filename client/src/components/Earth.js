import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Earth = ({ style }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentRef.clientWidth / currentRef.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    currentRef.appendChild(renderer.domElement);

    // Earth Geometry
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const texture = new THREE.TextureLoader().load('../../images/earth_rotate.png');

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);

    camera.position.z = 16;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
      
    Object.assign(renderer.domElement.style, style);

    animate();

    return () => {
      currentRef.removeChild(renderer.domElement);
    }
  }, [style]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', 'zIndex': '4' }}></div>;
};

export default Earth;
