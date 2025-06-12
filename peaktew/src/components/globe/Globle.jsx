// src/components/GlobeDemo.jsx
import { World } from "./world";
import React from "react";

export function GlobeDemo() {
  const globeConfig = {
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.3,
    emissive: "#220239",
    emissiveIntensity: 0.3,
    shininess: 1,
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    autoRotate: true,
    autoRotateSpeed: 0.8,
  };

  return (
    <div
      className="relative overflow-hidden mx-auto"
      style={{
        width: 'calc(100vw - 32px)',
        aspectRatio: '2 / 1.6',
        borderRadius: '30px',
      }}
    >
      <World globeConfig={globeConfig} />
    </div>
  );
}
