import React from 'react';
import { Box, keyframes } from '@mui/material';

// Define animations
const rotate = keyframes`
  0%, 100% {
    transform: scale(1) translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) translateX(30px) rotate(360deg);
    opacity: 0.6;
  }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0c4a9c 0%, #cbe5f2 100%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100px',
          height: '100px',
        }}
      >
        {/* Central lowercase "n" Shape as SVG */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            {/* Lowercase "n" shape */}
            <path
              d="M 30 60 L 30 40 C 30 35 35 35 35 40 L 35 55 C 35 60 40 60 45 55 L 45 40 C 45 35 50 35 50 40 L 50 60"
              stroke="white"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </Box>

        {/* Top Shape */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '15px',
            height: '30px',
            backgroundColor: '#ffffff',
            transform: 'translateX(-50%)',
            animation: `${rotate} 2s infinite ease-in-out`,
          }}
        />

        {/* Right Shape */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            width: '15px',
            height: '30px',
            backgroundColor: '#ffffff',
            transform: 'translateY(-50%)',
            animation: `${rotate} 2s infinite ease-in-out`,
            animationDelay: '0.5s',
          }}
        />

        {/* Bottom Shape */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '15px',
            height: '30px',
            backgroundColor: '#ffffff',
            transform: 'translateX(-50%)',
            animation: `${rotate} 2s infinite ease-in-out`,
            animationDelay: '1s',
          }}
        />

        {/* Left Diamond Shape */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            width: '15px',
            height: '30px',
            backgroundColor: '#ffffff',
            transform: 'translateY(-50%) rotate(45deg)',
            animation: `${rotate} 2s infinite ease-in-out`,
            animationDelay: '1.5s',
          }}
        />
      </Box>
    </Box>
  );
};

export default Loader;
