import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ball from './Ball'; // Make sure these components are correctly defined
import Pipe from './pipe';
import Block from './Block';

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [8, 5, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Ball position={[1, 1, 1]} />
      <Pipe position={[3, 0, 1]} />
      <Block position={[5, -1, 1]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
