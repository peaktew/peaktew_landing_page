import React,{ useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Globe({ globeConfig }) {
  const globeRef = useRef(null);
  const groupRef = useRef(null);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!groupRef.current || globeRef.current) return;

    const globe = new ThreeGlobe();

    globeRef.current = globe;
    groupRef.current.add(globe);

    groupRef.current.rotation.y = 0.5;
    groupRef.current.rotation.x = 0.18;

    setIsInitialized(true);

    return () => {
      if (groupRef.current && globeRef.current) {
        groupRef.current.remove(globeRef.current);
      }

      globeRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globe = globeRef.current;

    const textureLoader = new THREE.TextureLoader();

    let texture;
    let material;

    textureLoader.load(
      "/texture/globe-hex-texture.png",

      (loadedTexture) => {
        texture = loadedTexture;

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;

        texture.needsUpdate = true;

        material = new THREE.ShaderMaterial({
          uniforms: {
            // Original globe gradient
            topColor: {
              value: new THREE.Color("#f5e6fa"),
            },

            bottomColor: {
              value: new THREE.Color(2, 2, 2),
            },

            whiteBoost: {
              value: 0.7,
            },

            // NEW:
            // purple world-map texture
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

              // ------------------------------
              // ORIGINAL WHITE / PINK GLOBE
              // ------------------------------

              float gradient =
                clamp(
                  vNormal.y * 0.5 + 0.5,
                  0.0,
                  1.0
                );

              gradient =
                smoothstep(
                  0.5,
                  0.9,
                  gradient
                );

              vec3 baseColor =
                mix(
                  bottomColor * whiteBoost,
                  topColor,
                  gradient
                );


              // ------------------------------
              // PURPLE COUNTRY PATTERN
              // ------------------------------

              vec4 pattern =
                texture2D(
                  patternTexture,
                  vUv
                );

              float patternAlpha =
                pattern.a *
                patternStrength;


              // ------------------------------
              // COMBINE THEM
              // ------------------------------

              vec3 finalColor =
                mix(
                  baseColor,
                  pattern.rgb,
                  patternAlpha
                );


              gl_FragColor =
                vec4(
                  finalColor,
                  1.0
                );
            }
          `,
        });

        globe.globeMaterial(material);

        globe
          .showAtmosphere(true)
          .atmosphereColor(
            globeConfig.atmosphereColor || "#ffffff"
          )
          .atmosphereAltitude(
            globeConfig.atmosphereAltitude || 0.3
          );
      },

      undefined,

      (error) => {
        console.error(
          "Failed to load globe texture:",
          error
        );
      }
    );

    return () => {
      if (texture) {
        texture.dispose();
      }

      if (material) {
        material.dispose();
      }
    };
  }, [isInitialized, globeConfig]);

  return <group ref={groupRef} />;
}

export function World({ globeConfig }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 300],
        fov: 40,
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
        color={
          globeConfig.ambientLight ||
          "#ffffff"
        }
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
        enablePan={false}
        enableZoom={false}
        enableRotate
        autoRotate={globeConfig.autoRotate}
        autoRotateSpeed={
          globeConfig.autoRotateSpeed
        }
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}