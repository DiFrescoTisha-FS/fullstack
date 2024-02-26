import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const JupiterCanvas = () => {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      65, // FOV
      mountRef.current.clientWidth / mountRef.current.clientHeight, // Aspect Ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );

    // Position the camera based on screen size
    camera.position.z = isMobile ? 5 : 10;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Jupiter setup
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/images/earthlights1k.jpg", () => {
      // Update rendering when the texture is loaded
      renderer.render(scene, camera);
    });

    const purpleColor = new THREE.Color('#ac94f4'); // Define the purple color
    const material = new THREE.MeshBasicMaterial({
      color: purpleColor, // Set the purple color for the material
      map: texture // Add the texture to the material
    });

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);

    // Scale the sphere based on screen size
    const scaleFactor = isMobile ? 2 : 5;
    sphere.scale.set(scaleFactor, scaleFactor, scaleFactor);

    scene.add(sphere);

    // Ensure the camera is looking at the sphere
    camera.lookAt(sphere.position);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.004; // Rotate the sphere
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsMobile(width < 768);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%', zIndex: 10 }} />;
};

export default JupiterCanvas;
