import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ fontSize: '0.9rem', color: 'white' }}>
      © 2024{' '}
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noreferrer"
        style={{
          color: 'white', // Change hyperlink color to white
          textDecoration: 'none', // Remove underline
        }}
      >
        Netlify
      </a>{' '}
      | <span>Credits</span>
    </Box>
  );
};

export default Footer;
