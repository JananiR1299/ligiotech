import React from 'react';

interface PipeProps {
  position: [number, number, number]; // Change from number[] to tuple
}

const Pipe: React.FC<PipeProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

export default Pipe;
