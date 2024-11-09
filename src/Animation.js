import React from 'react';
import FiveMillion from './text/Header'; // Ensure this points to Header.js
import Footer from './Footer/Footer'; // Ensure this points to Footer.js
import ContactForm from './contact/contact';
import About from './about/about';
import Marquee from './marquee/marquee';

const Animation = () => {
  return (
    <>
      <FiveMillion /> 
      <Marquee />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Animation;
