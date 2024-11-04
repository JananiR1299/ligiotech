import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <Box
            id="about"
            sx={{
                bgcolor: 'background.paper',
                py: 10,
                minHeight: '100vh',
            }}
        >
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
                    <Grid item xs={12}>
                        <Box
                            textAlign="center"
                            mb={5}
                            sx={{
                                animation: 'fadeSlideUp 2s ease forwards',
                            }}
                        >
                            <Typography variant="h4" fontWeight="bold">
                                <Box component="span" sx={{ color: '#1976d2' }}>
                                    About Us
                                </Box>
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                sx={{ maxWidth: '550px', mx: 'auto', lineHeight: 1.6 }}
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                <br />
                                Lorem Ipsum has been the industry's standard dummy text.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* About Content */}
                <Grid container spacing={5} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ animation: 'fadeSlideUp 1s ease forwards' }}>
                            <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                                Lorem Ipsum is simply dummy text
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#2c3145', fontWeight: 'bold', mt: 2 }}>
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" mt={3}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                                of classical Latin literature from 45 BC, making it over 2000 years old.
                            </Typography>
                            <Typography variant="body1" color="textSecondary" mt={3}>
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" sx={{ animation: 'fadeSlideUp 1s ease forwards' }}>
                            <img
                                src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                                alt="About us"
                                style={{ width: '100%', maxWidth: '450px', borderRadius: '8px' }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                {/* Feature Boxes */}
                <Grid container spacing={3} mt={5}>
                    {[{ icon: faPencilAlt, title: "Creative Design" }, { icon: faAngellist, title: "We make Best Result" }, { icon: faPaperPlane, title: "Best Platform" }].map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s',
                                    },
                                    animation: 'fadeSlideUp 1s ease forwards',
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
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
