import { useRef, useState, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

const MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF-Binary/BrainStem.glb';

useGLTF.preload(MODEL_URL);

const BONE_NAME_MAP: Record<string, string> = {
  skull: 'skull',
  cranium: 'skull',
  head: 'skull',
  jaw: 'skull',
  mandible: 'skull',
  spine: 'spine',
  vertebra: 'spine',
  vertebrae: 'spine',
  cervical: 'spine',
  thoracic: 'spine',
  lumbar: 'spine',
  sacrum: 'spine',
  rib: 'ribcage',
  ribs: 'ribcage',
  sternum: 'sternum',
  breastbone: 'sternum',
  pelvis: 'pelvis',
  hip: 'pelvis',
  ilium: 'pelvis',
  femur: 'femur',
  thigh: 'femur',
  tibia: 'tibia',
  fibula: 'tibia',
  shin: 'tibia',
  humerus: 'humerus',
  upperarm: 'humerus',
  radius: 'radius_ulna',
  ulna: 'radius_ulna',
  forearm: 'radius_ulna',
  patella: 'patella',
  kneecap: 'patella',
};

function resolveBoneId(meshName: string): string | null {
  const lower = meshName.toLowerCase().replace(/[_\s\-\.]/g, '');
  for (const [key, id] of Object.entries(BONE_NAME_MAP)) {
    if (lower.includes(key)) return id;
  }
  return null;
}

const BASE_COLOR = new THREE.Color('#b0bec5');
const HOVER_COLOR = new THREE.Color('#22d3ee');
const SELECTED_COLOR = new THREE.Color('#0891b2');
const UNKNOWN_COLOR = new THREE.Color('#607d8b');

interface InteractiveMeshProps {
  mesh: THREE.Mesh;
  boneId: string | null;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

function InteractiveMesh({ mesh, boneId, isSelected, onSelect }: InteractiveMeshProps) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  const handleClick = useCallback(
    (e: ThreeEvent<MouseEvent>) => {
      if (!boneId) return;
      e.stopPropagation();
      onSelect(boneId);
    },
    [boneId, onSelect]
  );

  const handlePointerOver = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (!boneId) return;
      e.stopPropagation();
      setHovered(true);
      document.body.style.cursor = 'pointer';
    },
    [boneId]
  );

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  }, []);

  let color: THREE.Color;
  let emissiveIntensity = 0;

  if (!boneId) {
    color = UNKNOWN_COLOR;
  } else if (isSelected) {
    color = SELECTED_COLOR;
    emissiveIntensity = 0.6;
  } else if (hovered) {
    color = HOVER_COLOR;
    emissiveIntensity = 0.4;
  } else {
    color = BASE_COLOR;
  }

  const origMat = mesh.material as THREE.MeshStandardMaterial;

  return (
    <mesh
      ref={meshRef}
      geometry={mesh.geometry}
      position={mesh.position}
      rotation={mesh.rotation}
      scale={mesh.scale}
      onClick={boneId ? handleClick : undefined}
      onPointerOver={boneId ? handlePointerOver : undefined}
      onPointerOut={boneId ? handlePointerOut : undefined}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        emissive={hovered || isSelected ? color : new THREE.Color('#000000')}
        emissiveIntensity={emissiveIntensity}
        roughness={origMat?.roughness ?? 0.5}
        metalness={origMat?.metalness ?? 0.1}
      />
    </mesh>
  );
}

interface SkeletonModelProps {
  selectedBone: string | null;
  onBoneSelect: (id: string) => void;
}

export default function SkeletonModel({ selectedBone, onBoneSelect }: SkeletonModelProps) {
  const { scene } = useGLTF(MODEL_URL);

  const meshes: THREE.Mesh[] = [];
  scene.traverse((obj) => {
    if ((obj as THREE.Mesh).isMesh) {
      meshes.push(obj as THREE.Mesh);
    }
  });

  return (
    <group>
      {meshes.map((mesh, i) => {
        const boneId = resolveBoneId(mesh.name);
        return (
          <InteractiveMesh
            key={`${mesh.name}-${i}`}
            mesh={mesh}
            boneId={boneId}
            isSelected={boneId !== null && boneId === selectedBone}
            onSelect={onBoneSelect}
          />
        );
      })}
    </group>
  );
}
