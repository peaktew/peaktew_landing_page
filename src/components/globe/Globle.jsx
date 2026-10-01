// src/components/GlobeDemo.jsx

import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

const World = lazy(() =>
  import("./world").then((module) => ({
    default: module.World,
  }))
);

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

export function GlobeDemo() {
  const containerRef = useRef(null);
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldLoadGlobe(true);
        observer.disconnect();
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto overflow-hidden"
      style={{
        width: "calc(100vw - 32px)",
        aspectRatio: "2 / 1.6",
        borderRadius: "30px",
        minHeight: "400px",
      }}
    >
      {shouldLoadGlobe && (
        <Suspense fallback={null}>
          <World globeConfig={globeConfig} />
        </Suspense>
      )}
    </div>
  );
}