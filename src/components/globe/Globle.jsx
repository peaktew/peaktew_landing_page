// src/components/GlobeDemo.jsx

import React, {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";

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

  // ROTATION
  autoRotate: true,

  // Previously 0.8
  autoRotateSpeed: 1.8,

  // INITIAL POSITION
  // Approximate orientation toward Africa / Europe / Asia
  initialRotationY: -1.9,

  // Keep continents vertically centered
  initialRotationX: 0,
};

const compactGlobeConfig = {
  ...globeConfig,
  // Preserve the original glow size while the wider camera prevents clipping.
  atmosphereAltitude: 0.3,
  cameraZ: 355,
};

export function GlobeDemo() {
  const containerRef = useRef(null);
  const [shouldLoadGlobe, setShouldLoadGlobe] =
    useState(false);
  const activeGlobeConfig =
    typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches
      ? compactGlobeConfig
      : globeConfig;

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
      className="hero-globe relative mx-auto w-screen overflow-visible sm:w-[calc(100vw-32px)]"
    >
      {shouldLoadGlobe && (
        <Suspense fallback={null}>
          <World globeConfig={activeGlobeConfig} />
        </Suspense>
      )}
    </div>
  );
}
