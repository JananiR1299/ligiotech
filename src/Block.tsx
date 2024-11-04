import React from 'react';

interface BlockProps {
  position: [number, number, number]; // Change from number[] to tuple
}

const Block: React.FC<BlockProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Block;
