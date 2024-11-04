import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Animation from './Animation';
import About from './about/about';
import Contact from './contact/contact';


const App = () => {
  return (
    <Router>
      {/* <Container maxWidth="md"> */}
        <Routes>
          <Route path="/" element={<Animation />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
        </Routes>
      {/* </Container> */}
    </Router>
  );
};

export default App;
