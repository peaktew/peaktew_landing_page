// src/components/world.jsx

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Globe({ globeConfig }) {
  const globeRef = useRef(null);
  const groupRef = useRef(null);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const group = groupRef.current;

    if (!group || globeRef.current) return;

    const globe = new ThreeGlobe();

    globeRef.current = globe;
    group.add(globe);

    // Initial geographic orientation
    // Africa / Europe / Asia toward the viewer
    group.rotation.y = globeConfig.initialRotationY ?? -1.9;

    // Keep the continents near the vertical center
    group.rotation.x = globeConfig.initialRotationX ?? 0;

    group.rotation.z = 0;

    setIsInitialized(true);

    return () => {
      group.remove(globe);

      if (globeRef.current === globe) {
        globeRef.current = null;
      }
    };
  }, [
    globeConfig.initialRotationY,
    globeConfig.initialRotationX,
  ]);

  // =====================================================
  // LOAD TEXTURE AND SHADER
  // =====================================================

  useEffect(() => {
    const globe = globeRef.current;

    if (!globe || !isInitialized) return;

    const textureLoader = new THREE.TextureLoader();

    let texture = null;
    let material = null;
    let cancelled = false;

    textureLoader.load(
      "/texture/globe-hex-texture.png",

      (loadedTexture) => {
        if (cancelled) {
          loadedTexture.dispose();
          return;
        }

        texture = loadedTexture;

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        texture.minFilter =
          THREE.LinearMipmapLinearFilter;

        texture.magFilter = THREE.LinearFilter;

        texture.needsUpdate = true;

        // =================================================
        // CUSTOM SHADER
        // =================================================

        material = new THREE.ShaderMaterial({
          uniforms: {
            topColor: {
              value: new THREE.Color("#f5e6fa"),
            },

            bottomColor: {
              value: new THREE.Color(2, 2, 2),
            },

            whiteBoost: {
              value: 0.7,
            },

            patternTexture: {
              value: texture,
            },

            patternStrength: {
              value: 1.0,
            },
          },

          vertexShader: `
            varying vec3 vNormal;
            varying vec2 vUv;

            void main() {
              vNormal = normalize(normalMatrix * normal);
              vUv = uv;

              gl_Position =
                projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
            }
          `,

          fragmentShader: `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float whiteBoost;

            uniform sampler2D patternTexture;
            uniform float patternStrength;

            varying vec3 vNormal;
            varying vec2 vUv;

            void main() {

              // Base globe gradient

              float gradient =
                clamp(
                  vNormal.y * 0.5 + 0.5,
                  0.0,
                  1.0
                );

              gradient = smoothstep(
                0.5,
                0.9,
                gradient
              );

              vec3 baseColor = mix(
                bottomColor * whiteBoost,
                topColor,
                gradient
              );

              // Purple geographic texture

              vec4 pattern = texture2D(
                patternTexture,
                vUv
              );

              float patternAlpha =
                pattern.a * patternStrength;

              vec3 finalColor = mix(
                baseColor,
                pattern.rgb,
                patternAlpha
              );

              gl_FragColor = vec4(
                finalColor,
                1.0
              );
            }
          `,
        });

        globe.globeMaterial(material);

        globe
          .showAtmosphere(
            globeConfig.showAtmosphere ?? true
          )
          .atmosphereColor(
            globeConfig.atmosphereColor ?? "#ffffff"
          )
          .atmosphereAltitude(
            globeConfig.atmosphereAltitude ?? 0.3
          );
      },

      undefined,

      (error) => {
        if (!cancelled) {
          console.error(
            "Failed to load globe texture:",
            error
          );
        }
      }
    );

    return () => {
      cancelled = true;

      if (texture) {
        texture.dispose();
      }

      if (material) {
        material.dispose();
      }
    };
  }, [
    isInitialized,
    globeConfig.showAtmosphere,
    globeConfig.atmosphereColor,
    globeConfig.atmosphereAltitude,
  ]);

  return <group ref={groupRef} />;
}

// =====================================================
// WORLD CANVAS
// =====================================================

export function World({ globeConfig }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 300],
        fov: 40,
        near: 0.1,
        far: 1000,
      }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight
        intensity={0.8}
        color={globeConfig.ambientLight ?? "#ffffff"}
      />

      <directionalLight
        color="#ffffff"
        position={[100, 200, 400]}
        intensity={1}
      />

      <pointLight
        color="#9d4edd"
        intensity={1.2}
        position={[0, 0, 300]}
      />

      <Globe globeConfig={globeConfig} />

      <OrbitControls
        makeDefault
        target={[0, 0, 0]}
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.05}
        autoRotate={globeConfig.autoRotate}
        autoRotateSpeed={globeConfig.autoRotateSpeed}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}