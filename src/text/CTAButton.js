import React from 'react';
import { Button } from '@mui/material';

const CTAButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 4, padding: '0.8em 3em', fontSize: '1rem' }}
      endIcon={<span style={{ marginLeft: '1rem' }}>→</span>}
    >
      Start the journey
    </Button>
  );
};

export default CTAButton;
