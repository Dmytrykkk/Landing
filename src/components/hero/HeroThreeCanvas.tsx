"use client";

import { Suspense, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TechLabScene from "./TechLabScene";

function CanvasFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/10 via-slate-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" aria-hidden="true" />
  );
}

export default function HeroThreeCanvas() {
  const [, setPointerDown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onPointerDown = useCallback(() => setPointerDown(true), []);
  const onPointerUp = useCallback(() => setPointerDown(false), []);
  const onPointerLeave = useCallback(() => setPointerDown(false), []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full touch-none"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
      aria-hidden="true"
    >
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0.6, 2.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <color attach="background" args={["transparent"]} />
          <TechLabScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.4}
            maxPolarAngle={Math.PI / 2 + 0.2}
            minAzimuthAngle={-0.5}
            maxAzimuthAngle={0.5}
            rotateSpeed={0.4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
