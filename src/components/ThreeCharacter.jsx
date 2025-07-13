import React, { useEffect, useRef } from 'react';

const ThreeCharacter = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const orbitSphereRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.THREE || !containerRef.current) return;

    const container = containerRef.current;
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Create a more complex animated character
    const headGeometry = new window.THREE.SphereGeometry(0.8, 32, 32);
    const headMaterial = new window.THREE.MeshBasicMaterial({ 
      color: 0x007AFF, 
      transparent: true, 
      opacity: 0.9,
      wireframe: true 
    });
    const head = new window.THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 0.5;
    scene.add(head);

    // Body
    const bodyGeometry = new window.THREE.CylinderGeometry(0.4, 0.6, 1.2, 16);
    const bodyMaterial = new window.THREE.MeshBasicMaterial({ 
      color: 0x007AFF, 
      transparent: true, 
      opacity: 0.7,
      wireframe: true 
    });
    const body = new window.THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.5;
    scene.add(body);

    // Arms
    const armGeometry = new window.THREE.CylinderGeometry(0.15, 0.15, 0.8, 8);
    const armMaterial = new window.THREE.MeshBasicMaterial({ 
      color: 0x007AFF, 
      transparent: true, 
      opacity: 0.8,
      wireframe: true 
    });
    const leftArm = new window.THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.8, -0.2, 0);
    leftArm.rotation.z = Math.PI / 6;
    scene.add(leftArm);

    const rightArm = new window.THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.8, -0.2, 0);
    rightArm.rotation.z = -Math.PI / 6;
    scene.add(rightArm);

    // Add floating particles around the character
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particleGeometry = new window.THREE.SphereGeometry(0.05, 8, 8);
      const particleMaterial = new window.THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.7
      });
      const particle = new window.THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      particles.push(particle);
      scene.add(particle);
    }

    // Add a rotating ring around the character
    const ringGeometry = new window.THREE.RingGeometry(1.5, 1.7, 32);
    const ringMaterial = new window.THREE.MeshBasicMaterial({ 
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
      side: window.THREE.DoubleSide
    });
    const ring = new window.THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    sphereRef.current = head;
    orbitSphereRef.current = ring;

    // Mouse tracking
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (sphereRef.current && orbitSphereRef.current) {
        // Rotate main character
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
        
        // Rotate ring
        orbitSphereRef.current.rotation.z += 0.02;
        
        // Animate particles
        particles.forEach((particle, index) => {
          const time = Date.now() * 0.001;
          particle.position.x += Math.sin(time + index) * 0.01;
          particle.position.y += Math.cos(time + index) * 0.01;
          particle.rotation.x += 0.02;
          particle.rotation.y += 0.02;
        });
        
        // Animate body parts
        body.rotation.y += 0.005;
        leftArm.rotation.z = Math.PI / 6 + Math.sin(Date.now() * 0.003) * 0.2;
        rightArm.rotation.z = -Math.PI / 6 - Math.sin(Date.now() * 0.003) * 0.2;
        
        // Mouse tracking
        sphereRef.current.rotation.y += mouseRef.current.x * 0.02;
        sphereRef.current.rotation.x += mouseRef.current.y * 0.02;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (container && renderer && camera) {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeCharacter;
