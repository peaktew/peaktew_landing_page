// src/components/globe/World.jsx
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, Vector3} from "three";
import * as THREE from 'three';
import ThreeGlobe from "three-globe";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import countries from './globe.json';

extend({ ThreeGlobe });

export function Globe({ globeConfig }) {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);

      groupRef.current.rotation.y = 0.5; // Adjust this to rotate to desired longitude
groupRef.current.rotation.x = 0.18;         // Optional tilt

      setIsInitialized(true);
    }
  }, []);
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
    
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color('#d4aae3') },  // Soft pink
        bottomColor: { value: new THREE.Color(2, 2, 2) }, // SUPER WHITE (RGB > 1 for HDR effect)
        whiteBoost: { value: 0.7 } // Intensity multiplier
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          uniform float whiteBoost;
          varying vec3 vNormal;
          
          void main() {
            float gradient = clamp(vNormal.y * 0.5 + 0.5, 0.0, 1.0);
            gradient = smoothstep(0.5, 0.9, gradient); // White dominates 70% of the globe
            
            vec3 baseColor = mix(bottomColor * whiteBoost, topColor, gradient);
            gl_FragColor = vec4(baseColor, 1.0);
          }
        `,
        emissive: new THREE.Color(2, 2, 2), // Emissive white glow
        emissiveIntensity: 0.3, // Increased from 0.1
      });
  
    globeRef.current.globeMaterial(gradientMaterial);
  
    // Rest of your existing code
    globeRef.current.showAtmosphere(true)
      .atmosphereColor(globeConfig.atmosphereColor || "#FFFFFF")
      .atmosphereAltitude(globeConfig.atmosphereAltitude || 0.3);
  
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(4)
      .hexPolygonMargin(0.6)
      .hexPolygonColor(() => '#9f0b9f');
  
  }, [isInitialized, globeConfig]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffffff, 1); // solid black background
  }, []);
  return null;
}

export function World({ globeConfig }) {
  const scene = new Scene();
  return (
    <Canvas camera={{ position: [0, 0, 300], fov: 40}} scene={scene}>
      <WebGLRendererConfig />
      <ambientLight intensity={0.8} color={globeConfig.ambientLight || "#ffffff"} />
      <directionalLight color="#ffffff" position={new Vector3(100, 200, 400)} intensity={1} />
      <pointLight color="#9d4edd" intensity={1.2} position={[0, 0, 300]} />
      <Globe globeConfig={globeConfig} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={2.0}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
