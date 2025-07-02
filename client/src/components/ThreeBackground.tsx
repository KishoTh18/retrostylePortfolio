import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initThree;
    document.head.appendChild(script);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      const existingScript = document.querySelector('script[src*="three.min.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const initThree = () => {
    if (!window.THREE || !canvasRef.current) return;

    const THREE = window.THREE;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const posArray = new Float32Array(starsCount * 3);
    const colorArray = new Float32Array(starsCount * 3);
    const scaleArray = new Float32Array(starsCount);

    for (let i = 0; i < starsCount * 3; i += 3) {
      // Spread stars across a large area
      posArray[i] = (Math.random() - 0.5) * 100;     // X
      posArray[i + 1] = (Math.random() - 0.5) * 100; // Y
      posArray[i + 2] = (Math.random() - 0.5) * 100; // Z
      
      // Different star colors - white, blue, golden, cyan
      const colorType = Math.random();
      if (colorType < 0.4) {
        // White stars
        colorArray[i] = 1;
        colorArray[i + 1] = 1;
        colorArray[i + 2] = 1;
      } else if (colorType < 0.6) {
        // Electric blue stars
        colorArray[i] = 0.2;
        colorArray[i + 1] = 0.8;
        colorArray[i + 2] = 1;
      } else if (colorType < 0.8) {
        // Golden stars
        colorArray[i] = 1;
        colorArray[i + 1] = 0.8;
        colorArray[i + 2] = 0.2;
      } else {
        // Cyan stars
        colorArray[i] = 0.4;
        colorArray[i + 1] = 1;
        colorArray[i + 2] = 0.9;
      }
      
      // Random scale for twinkling effect
      scaleArray[i / 3] = Math.random();
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    starsGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    // Custom shader material for twinkling stars
    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        size: { value: 4.0 }
      },
      vertexShader: `
        attribute float scale;
        uniform float time;
        uniform float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = sin(time * 2.0 + position.x * 0.1 + position.y * 0.1) * 0.5 + 0.5;
          gl_PointSize = size * scale * twinkle * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float r = distance(gl_PointCoord, vec2(0.5, 0.5));
          if (r > 0.5) discard;
          float opacity = 1.0 - smoothstep(0.0, 0.5, r);
          gl_FragColor = vec4(vColor, opacity);
        }
      `,
      transparent: true,
      vertexColors: true
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create floating orbs/nebula effects
    const orbsGeometry = new THREE.BufferGeometry();
    const orbsCount = 50;
    const orbsPos = new Float32Array(orbsCount * 3);
    const orbsColors = new Float32Array(orbsCount * 3);

    for (let i = 0; i < orbsCount * 3; i += 3) {
      orbsPos[i] = (Math.random() - 0.5) * 50;
      orbsPos[i + 1] = (Math.random() - 0.5) * 50;
      orbsPos[i + 2] = (Math.random() - 0.5) * 50;
      
      // Alternating blue and golden orbs
      if (Math.random() > 0.5) {
        orbsColors[i] = 0.1;     // R
        orbsColors[i + 1] = 0.7; // G
        orbsColors[i + 2] = 1;   // B (blue)
      } else {
        orbsColors[i] = 1;       // R
        orbsColors[i + 1] = 0.6; // G
        orbsColors[i + 2] = 0.1; // B (golden)
      }
    }

    orbsGeometry.setAttribute('position', new THREE.BufferAttribute(orbsPos, 3));
    orbsGeometry.setAttribute('color', new THREE.BufferAttribute(orbsColors, 3));

    const orbsMaterial = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    const orbs = new THREE.Points(orbsGeometry, orbsMaterial);
    scene.add(orbs);

    camera.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Update shader time for twinkling
      starsMaterial.uniforms.time.value = time;
      
      // Rotate stars slowly
      stars.rotation.x += 0.0002;
      stars.rotation.y += 0.0003;
      
      // Float orbs
      orbs.rotation.x += 0.001;
      orbs.rotation.y += 0.0008;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  return <canvas ref={canvasRef} id="three-canvas" className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" />;
}
