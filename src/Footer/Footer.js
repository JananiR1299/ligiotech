import React, { useRef, useEffect } from 'react';
import { Box, Grid, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter,  Instagram, Call, Email } from '@mui/icons-material';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeSlideUp 2.5s ease-out forwards';
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        position: 'relative',
        width: '98.8vw',
        backgroundColor: '#3586ff',
        paddingTop: '120px',
        paddingBottom: '50px',
        mt: 8,
        overflow: 'hidden',
        fontFamily: 'Poppins, sans-serif',
        opacity: 0, // Initial opacity for fade effect
        '@keyframes fadeSlideUp': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Waves */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '150px',
          top: 0,
          left: 0,
          zIndex: 2,
          backgroundColor: 'rgba(157, 161, 158, 0.5)',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '150px',
            backgroundImage: 'url(https://i.ibb.co/rZt4Nhg/wave.png)',
            backgroundSize: '1000px 150px',
            zIndex: 1,
          },
          '&::before': {
            animation: 'animateWave 10s linear infinite',
            opacity: 1,
          },
          '&::after': {
            animation: 'animateWave 8s linear infinite reverse',
            opacity: 0.7,
          },
          '@keyframes animateWave': {
            '0%': { backgroundPositionX: '1000px' },
            '100%': { backgroundPositionX: '0px' },
          },
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3} justifyContent="center" sx={{ textAlign: 'center', color: 'white' }}>
          {/* Footer Sections */}
          <FooterSection title="Services" items={["Custom Software Development", "Software Product Development", "Software Testing Services", "Mobile App Development", "New Technology Solutions"]} />
          <FooterSection title="Technologies" items={["Cloud Technologies", "Microsoft Technology Services", "Open Source Technologies", "JavaScript Frameworks", "DevOps Services", "Test Automation Tools"]} />
          <FooterSection title="Industries" items={["SaaS & Software Vendors", "Construction & Facility Management", "Transportation & Warehousing", "Retail & E-commerce", "Healthcare"]} />
          <FooterSection title="Resources" items={["Case Studies", "Blog", "White Paper", "Infographics", "Customer Testimonials"]} />
          <FooterSection title="Company" items={["About Us", "Our History", "Our Approach", "Contact Us", "Our Leaders"]} />

          {/* Social Icons */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <IconButton href="#"><Facebook sx={iconStyles} /></IconButton>
              <IconButton href="#"><Twitter sx={iconStyles} /></IconButton>
              <IconButton href="#"><Instagram sx={iconStyles} /></IconButton>
              <IconButton href="tel:+123456789"><Call sx={iconStyles} /></IconButton>
              <IconButton href="mailto:example@example.com"><Email sx={iconStyles} /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Text */}
        <Typography sx={{ color: '#eee', textAlign: 'center', mt: 3, fontSize: '1.1em' }}>
          &copy;2021 Prakash Sahu | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

// Footer Section Component
const FooterSection = ({ title, items }) => (
  <Grid item xs={12} md={2}>
    <Typography variant="h6" color="white">{title}</Typography>
    {items.map((item, index) => (
      <Typography key={index} color="#ccc">{item}</Typography>
    ))}
  </Grid>
);

// Icon styles for hover effect
const iconStyles = {
  color: 'white',
  fontSize: 30,
  transition: 'transform 0.5s',
  '&:hover': { color: 'blue', transform: 'translateY(-5px)' },
};

export default Footer;
