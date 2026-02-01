"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PRIMARY_BLUE = "#0047AB";
const WHITE = "#ffffff";
const LIGHT_GRAY = "#e8ecf0";
const DARK_BLUE = "#003380";
const SCREEN_GLOW = "#6ba3e8";

function Laptop({ position, rotation = 0, typingOffset = 0 }: { position: [number, number, number]; rotation?: number; typingOffset?: number }) {
  const group = useRef<THREE.Group>(null);
  const hand = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current || !hand.current) return;
    const t = state.clock.elapsedTime + typingOffset;
    hand.current.position.y = Math.sin(t * 2.5) * 0.02;
    hand.current.position.z = Math.cos(t * 2.2) * 0.01;
  });

  return (
    <group ref={group} position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.32, 0.02, 0.22]} />
        <meshStandardMaterial color={LIGHT_GRAY} metalness={0.3} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.12, -0.08]} rotation={[0.3, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.18, 0.015]} />
        <meshStandardMaterial color={WHITE} metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.12, -0.072]} rotation={[0.3, 0, 0]}>
        <planeGeometry args={[0.26, 0.15]} />
        <meshBasicMaterial color={SCREEN_GLOW} transparent opacity={0.9} />
      </mesh>
      <mesh ref={hand} position={[0.05, 0.03, 0.02]} castShadow>
        <boxGeometry args={[0.06, 0.02, 0.04]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
    </group>
  );
}

function StudentSeat({
  position,
  rotation = 0,
  headBob = 0,
}: {
  position: [number, number, number];
  rotation?: number;
  headBob?: number;
}) {
  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!headRef.current) return;
    const t = state.clock.elapsedTime + headBob;
    headRef.current.position.y = 0.28 + Math.sin(t * 0.8) * 0.008;
    headRef.current.rotation.x = Math.sin(t * 0.5) * 0.03;
  });

  return (
    <group ref={group} position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.28, 0.04, 0.28]} />
        <meshStandardMaterial color={PRIMARY_BLUE} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.22, -0.14]} castShadow>
        <boxGeometry args={[0.26, 0.28, 0.04]} />
        <meshStandardMaterial color={DARK_BLUE} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.22, 0]} castShadow>
        <boxGeometry args={[0.2, 0.24, 0.12]} />
        <meshStandardMaterial color={PRIMARY_BLUE} metalness={0.15} roughness={0.75} />
      </mesh>
      <mesh ref={headRef} position={[0, 0.38, 0]} castShadow>
        <sphereGeometry args={[0.08, 12, 10]} />
        <meshStandardMaterial color="#f0d4a0" roughness={0.9} metalness={0} />
      </mesh>
    </group>
  );
}

function Desk({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.04, 0.5]} />
        <meshStandardMaterial color={LIGHT_GRAY} metalness={0.2} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.01, -0.22]} castShadow>
        <boxGeometry args={[0.76, 0.02, 0.06]} />
        <meshStandardMaterial color={WHITE} metalness={0.1} roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function TechLabScene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} castShadow shadow-mapSize={[512, 512]} shadow-camera-far={15} shadow-camera-left={-3} shadow-camera-right={3} shadow-camera-top={3} shadow-camera-bottom={-3} />
      <directionalLight position={[-2, 3, 2]} intensity={0.4} />
      <pointLight position={[0, 2, 2]} intensity={0.3} color={SCREEN_GLOW} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#f0f2f5" roughness={0.9} metalness={0} />
      </mesh>

      <Desk position={[0, 0, 0]} />
      <Laptop position={[0, 0.08, 0.05]} rotation={0} typingOffset={0} />
      <StudentSeat position={[0, 0, 0.35]} rotation={0} headBob={0} />

      <Desk position={[-1.2, 0, 0.2]} />
      <Laptop position={[-1.2, 0.08, 0.25]} rotation={0.2} typingOffset={1.5} />
      <StudentSeat position={[-1.2, 0, 0.55]} rotation={0.2} headBob={2} />

      <Desk position={[1.15, 0, -0.1]} />
      <Laptop position={[1.15, 0.08, -0.05]} rotation={-0.15} typingOffset={3} />
      <StudentSeat position={[1.15, 0, 0.25]} rotation={-0.15} headBob={1} />

      <Desk position={[0, 0, -1]} />
      <Laptop position={[-0.2, 0.08, -0.95]} rotation={0.1} typingOffset={2} />
      <Laptop position={[0.2, 0.08, -0.95]} rotation={-0.1} typingOffset={4} />
      <StudentSeat position={[-0.2, 0, -0.65]} rotation={0.1} headBob={0.5} />
      <StudentSeat position={[0.2, 0, -0.65]} rotation={-0.1} headBob={1.2} />
    </group>
  );
}
