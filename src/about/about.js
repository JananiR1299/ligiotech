import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../NavBar/Bar';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const features = [
        {
            icon: faPencilAlt,
            title: "Custom Software Development",
            content: "We create solutions from scratch, tailored to your specific business requirements, using the latest technology stacks."
        },
        {
            icon: faAngellist,
            title: "Web and Mobile Applications",
            content: "Our team designs and develops seamless web and mobile applications that deliver exceptional user experiences."
        },
        {
            icon: faPaperPlane,
            title: "Enterprise Solutions",
            content: "We build scalable and secure enterprise-grade software that helps organizations operate more efficiently."
        },
        {
            icon: faPaperPlane,
            title: "Cloud Solutions",
            content: "Leverage our cloud solutions to boost flexibility and accessibility while ensuring secure data storage and management."
        },
        {
            icon: faPaperPlane,
            title: "Consulting and Support",
            content: "Our experts offer consulting services and ongoing support to ensure your technology is optimized and future-ready."
        }
    ];



    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <Box
            id="about"
            sx={{
                bgcolor: 'background.paper',
                py: 10,
                minHeight: '100vh',
            }}
        >

            <NavBar />

            <style>
                {`
                    @keyframes fadeSlideUp {
                        0% { opacity: 0; transform: translateY(50px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>

            <Container>
                {/* Section Title */}
                <Grid container justifyContent="center">
                    <Grid item xs={12} data-aos="zoom-in">
                        <Box
                            textAlign="center"
                            mb={5}

                        >
                            <Typography variant="h4" fontWeight="bold">
                                <Box component="span" sx={{ color: '#1976d2' }}>
                                    About Us
                                </Box>
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="black"
                                sx={{ maxWidth: '550px', mx: 'auto', lineHeight: 1.6, }}
                            >
                                Welcome to Ligiotech — where innovation meets craftsmanship in software development.
                                As a dedicated development company, we specialize in creating custom software solutions that empower businesses to excel in their respective fields.
                                Our commitment to quality and client satisfaction drives us to stay at the forefront of technology, offering solutions that are efficient, scalable, and tailored to our clients' unique needs.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* About Content */}
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box data-aos="fade-up">
                            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                Who We Are
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#2c3145', mt: 2 }}>
                                At Ligiotech, we are a team of passionate technologists, designers, and developers with a shared vision: to turn complex problems into streamlined digital experiences.
                                We believe that technology is a powerful tool that, when implemented correctly, can transform businesses and lives.
                                Our expertise spans across a wide range of industries, including SaaS, e-commerce, healthcare, and finance, allowing us to bring a well-rounded perspective to every project we undertake.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} data-aos="flip-right">
                        <Box display="flex" justifyContent="center"   >
                            <img
                                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                                alt="About us"
                                style={{ width: '100%', maxWidth: '450px', borderRadius: '8px' }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6} mt={5} mb={2} data-aos="flip-right">
                        <Box display="flex" justifyContent="center"   >
                            <img
                                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                                alt="About us"
                                style={{ width: '100%', maxWidth: '450px', borderRadius: '8px' }}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box data-aos="fade-up">
                            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                Our Mission
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#2c3145', mt: 2 }}>
                                Our mission is to deliver exceptional digital solutions that align with our clients' goals and push the boundaries of what’s possible.
                                We take pride in combining creativity, technological expertise, and a deep understanding of industry trends to build solutions that are not only functional but also future-proof.
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
                {/* Feature Boxes */}
                <Box display="flex" justifyContent="center" mt={5} mb={2}>
                    <Typography variant="h4" fontWeight="bold" align="center">
                        <Box component="span" sx={{ color: '#1976d2' }}>
                            What We Do
                        </Box>
                    </Typography>
                </Box>
                <Grid container spacing={3} mt={5} data-aos="fade-up">
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    flexGrow: 1,
                                    opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.5,
                                    transition: 'transform 0.3s, box-shadow 0.3s, opacity 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: '#fff',
                                        boxShadow: '0 8px 20px -2px rgba(158, 152, 153, 0.5)',
                                        color: '#1976d2',
                                        fontSize: '22px',
                                        height: 65,
                                        width: 65,
                                        borderRadius: '50%',
                                        mb: 2,
                                    }}
                                >
                                    <FontAwesomeIcon icon={feature.icon} />
                                </Box>
                                <Typography variant="h6" fontWeight="bold" color="text.primary">
                                    {feature.title}
                                </Typography>
                                <Typography color="textSecondary" mt={2}>
                                    {feature.content}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {/* <Grid container spacing={3} mt={5} data-aos="fade-up">
                    {[
                        {
                            icon: faPencilAlt,
                            title: "Custom Software Development",
                            content: "We create solutions from scratch, tailored to your specific business requirements, using the latest technology stacks."
                        },
                        {
                            icon: faAngellist,
                            title: "Web and Mobile Applications",
                            content: "Our team designs and develops seamless web and mobile applications that deliver exceptional user experiences."
                        },
                        {
                            icon: faPaperPlane,
                            title: "Enterprise Solutions",
                            content: "We build scalable and secure enterprise-grade software that helps organizations operate more efficiently."
                        },
                        {
                            icon: faPaperPlane,
                            title: "Cloud Solutions",
                            content: "Leverage our cloud solutions to boost flexibility and accessibility while ensuring secure data storage and management."
                        },
                        {
                            icon: faPaperPlane,
                            title: "Consulting and Support",
                            content: "Our experts offer consulting services and ongoing support to ensure your technology is optimized and future-ready."
                        }
                    ].map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    flexGrow: 1,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bgcolor: '#fff',
                                        boxShadow: '0 8px 20px -2px rgba(158, 152, 153, 0.5)',
                                        color: '#1976d2',
                                        fontSize: '22px',
                                        height: 65,
                                        width: 65,
                                        borderRadius: '50%',
                                        mb: 2,
                                    }}
                                >
                                    <FontAwesomeIcon icon={feature.icon} />
                                </Box>
                                <Typography variant="h6" fontWeight="bold" color="text.primary">
                                    {feature.title}
                                </Typography>
                                <Typography color="textSecondary" mt={2}>
                                    {feature.content}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid> */}

            </Container>
        </Box>
    );
};

export default About;
