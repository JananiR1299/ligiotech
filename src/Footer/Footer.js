import React, { useRef, useEffect } from 'react';
import { Box, Grid, Typography, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, Call, Email } from '@mui/icons-material';

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

    const currentFooterRef = footerRef.current;
    if (currentFooterRef) {
      observer.observe(currentFooterRef);
    }

    return () => {
      if (currentFooterRef) {
        observer.unobserve(currentFooterRef);
      }
    };
  }, []);

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        position: 'relative',
        width: '98vw',
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
          backgroundColor: 'black',
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
            animation: 'animateWave 12s linear infinite',
            opacity: 1,
          },
          '&::after': {
            animation: 'animateWave 10s linear infinite reverse',
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
          &copy;2021 LigioTech | All Rights Reserved
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

// import React from 'react';
// import { Box, Typography, Button, Link } from '@mui/material';
// import { SvgIcon } from '@mui/material';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#1976d2', color: '#fff' }}>
//       <footer>
//         {/* Wave SVG */}
//         <SvgIcon sx={{ display: 'block', width: '100%', height: '100%' }} viewBox="0 0 1200 100" preserveAspectRatio="none">
//           <path
//             d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
//           />
//         </SvgIcon>

//         <Box display="flex" justifyContent="space-between" flexWrap="wrap" padding={2}>
//           <Box flex={1} padding={1}>
//             <Link href="#" sx={{ textDecoration: 'none', color: '#fff' }}>
//               <Typography variant="h5">LOGO</Typography>
//             </Link>
//             <Box marginTop={2}>
//               <Typography variant="h6">Get Started</Typography>
//               <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
//                 {['Start', 'Documentation', 'Installation'].map((item, index) => (
//                   <li key={index}>
//                     <Link href="#" sx={{ textDecoration: 'none', color: '#fff' }}>{item}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </Box>
//           </Box>

//           <Box flex={1} padding={1}>
//             <Typography variant="h6">Company</Typography>
//             <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
//               {['Contact', 'News', 'Careers'].map((item, index) => (
//                 <li key={index}>
//                   <Link href="#" sx={{ textDecoration: 'none', color: '#fff' }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//             <Typography variant="h6" marginTop={2}>Legal</Typography>
//             <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
//               {['Privacy Notice', 'Terms of Use'].map((item, index) => (
//                 <li key={index}>
//                   <Link href="#" sx={{ textDecoration: 'none', color: '#fff' }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </Box>

//           <Box flex={1} padding={1}>
//             <Typography variant="h6">Quick Links</Typography>
//             <ul style={{ padding: 0, listStyle: 'none', margin: 0 }}>
//               {['Support Center', 'Service Status', 'Security', 'Blog', 'Customers', 'Reviews'].map((item, index) => (
//                 <li key={index}>
//                   <Link href="#" sx={{ textDecoration: 'none', color: '#fff' }}>{item}</Link>
//                 </li>
//               ))}
//             </ul>
//           </Box>

//           <Box flex={1} padding={1}>
//             <Typography variant="h6">Let's Chat</Typography>
//             <Typography>Have a support question?</Typography>
//             <Link href="#" sx={{ textDecoration: 'none' }}>
//               <Button variant="contained" sx={{ marginTop: 1, backgroundColor: '#fff', color: '#1976d2' }}>Get in Touch</Button>
//             </Link>
//             <Typography variant="h6" marginTop={2}>You Call Us</Typography>
//             <Link href="tel:0124-64XXXX" sx={{ textDecoration: 'none', color: '#fff' }}>
//               <Typography>0124-64XXXX</Typography>
//             </Link>
//           </Box>
//         </Box>

//         <Box display="flex" justifyContent="center" padding={2}>
//           {/* Social Media Icons */}
//           {['Linkedin', 'Twitter', 'Youtube'].map((platform, index) => (
//             <Link key={index} href="#" sx={{ margin: '0 10px', textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#fff' }} target="_blank">
//               <SvgIcon sx={{ width: 24, height: 24 }}>
//                 {/* Placeholder for social icon paths */}
//               </SvgIcon>
//               <Typography variant="body2" sx={{ marginLeft: 0.5 }}>{platform}</Typography>
//             </Link>
//           ))}
//         </Box>
//       </footer>
//     </Box>
//   );
// };

// export default Footer;
