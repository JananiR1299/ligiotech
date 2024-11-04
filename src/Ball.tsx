import React from 'react';

interface BallProps {
  position: [number, number, number]; // Change from number[] to tuple
}

const Ball: React.FC<BallProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Ball;
