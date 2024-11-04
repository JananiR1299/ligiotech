import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from './Footer';
import ligiologo from '../ligiotech logo secondary .png';
// import Loader from './Loader'; // Import the Loader component
import NavBar from '../NavBar/Bar';
// import Footer from '../Footer/Footer';
// Define keyframes for animation
const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FiveMillion = () => {
  const [ setLoading] = useState(true); // State to manage loading

  // Simulate loading effect
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000); // Loader shows for 3 seconds
  // }, []);

  // Render loader while loading is true
  // if (loading) {
  //   return <Loader />;
  // }

  // Main content once loading is complete
  return (
    <Box>
         <Box
      sx={{
        minHeight: '79vh',
        width: '91vw',
        padding: '50px',
        borderRadius: '0',
        color: 'white',
        background: 'linear-gradient(135deg,#0c4a9c 0%,#cbe5f2 100%) #0c4a9c',
        fontFamily: 'Mulish, sans-serif',
        // position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
    <NavBar />

      <Box
        component="img"
        src={ligiologo}
        alt="logoimage"
        sx={{
          marginBottom: '20px',
          width: '110px',
          height: 'auto',
          marginRight: '20px',
          animation: `${slideUp} 1s ease-out`,
          animationDelay: '0.2s',
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      />

      <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
        {['Five', 'Million'].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                animation: `${slideUp} 1s ease-out`,
                animationDelay: `${0.5 + index * 0.5}s`,
                fontWeight: 'bold',
                fontSize: '4.5rem',
                fontFamily: 'Mulish, sans-serif',
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              {text}
            </Typography>

            <Box
              sx={{
                width: '0.8rem',
                height: '0.8rem',
                backgroundColor: 'white',
                borderRadius: '50%',
                marginLeft: '0.3rem',
                position: 'relative',
                top: '1.2rem',
                animation: `${slideUp} 1s ease-out`,
                animationDelay: `${0.5 + index * 0.5}s`,
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            ></Box>
          </Box>
        ))}
      </Box>

      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: '1rem',
          animation: `${slideUp} 1s ease-out`,
          animationDelay: '1.5s',
          maxWidth: '400px',
          fontFamily: 'Mulish, sans-serif',
          fontWeight: 'bold',
          textAlign: 'left',
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        Netlify has reached 5 million developers!
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          marginBottom: '40px',
          fontSize: '1rem',
          animation: `${slideUp} 1s ease-out`,
          animationDelay: '1.5s',
          maxWidth: '400px',
          fontFamily: 'Mulish, sans-serif',
          textAlign: 'left',
          opacity: 0,
          animationFillMode: 'forwards',
        }}
      >
        There's been a lot of fun along the way and some great moments to share. Travel through the journey to see how we got here and where you played a role (pun intended) in our story.
      </Typography>

     
      <Box sx={{ textAlign: 'left', marginBottom: '40px' }}>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          sx={{
            paddingLeft: '3em',
            paddingRight: '3em',
            borderRadius: '20px',
            border: '2px solid white',
            color: 'white',
            animation: `${fadeIn} 2s ease-out`,
            animationDelay: '2.5s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Mulish, sans-serif',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Start the journey
        </Button>
        
      </Box>
    </Box>
    <Footer /> 
    {/* </Box> */}
    </Box>
  );
};

export default FiveMillion;
