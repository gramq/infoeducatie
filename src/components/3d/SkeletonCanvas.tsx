import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Stage, Html } from '@react-three/drei';
import SkeletonModel from './SkeletonModel';

interface SkeletonCanvasProps {
  selectedBone: string | null;
  onBoneSelect: (id: string) => void;
}

export default function SkeletonCanvas({ selectedBone, onBoneSelect }: SkeletonCanvasProps) {
  return (
    <div className="h-full w-full" style={{ minHeight: '500px' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        style={{ width: '100%', height: '100%', background: '#050d1a' }}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
        <spotLight position={[-10, -5, -10]} angle={0.3} penumbra={1} intensity={0.4} />

        <Suspense
          fallback={
            <Html center>
              <span style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: 14, whiteSpace: 'nowrap' }}>
                Loading 3D Model...
              </span>
            </Html>
          }
        >
          <Stage adjustCamera={false} shadows={false}>
            <Center>
              <SkeletonModel selectedBone={selectedBone} onBoneSelect={onBoneSelect} />
            </Center>
          </Stage>
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={12}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
