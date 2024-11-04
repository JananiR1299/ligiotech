import React from 'react';
import { Typography } from '@mui/material';

const Description = () => {
  return (
    <Typography
      variant="body1"
      sx={{ textAlign: 'center', mt: 2, fontSize: '1.2rem', fontStyle: 'italic' }}
    >
  There's been a lot of fun
      along the way and some great moments to share. Travel through the journey to
      see how we got here and where you played a role (pun intended) in our story.
    </Typography>
  );
};

export default Description;
