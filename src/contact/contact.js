import React, { useEffect } from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton, Paper } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Email, Phone } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../NavBar/Bar';
// import Footer from '../Footer/Footer';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <Box sx={{ backgroundColor: '#fff', minHeight: '100vh', py: 5, px: 2 }}>
            <NavBar />
            <Grid container spacing={4} justifyContent="center">
                
                {/* Contact Information Card */}
                <Grid item xs={12} md={5} sx={{ display: 'flex' }} data-aos="fade-right">
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            bgcolor: '#1976d2',
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flexGrow: 1,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                            },
                        }}
                    >
                        <Typography variant="h5" fontWeight={500} gutterBottom>
                            Let's Get in Touch
                        </Typography>
                        <Typography variant="body1" mb={3} align="center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
                        </Typography>

                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <LocationOn color="inherit" />
                            <Typography variant="body2" ml={1}>92 Cherry Drive Uniondale, NY 11553</Typography>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Email color="inherit" />
                            <Typography variant="body2" ml={1}>lorem@ipsum.com</Typography>
                        </Box>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Phone color="inherit" />
                            <Typography variant="body2" ml={1}>123-456-789</Typography>
                        </Box>

                        {/* Social Icons */}
                        <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
                            <IconButton href="#" sx={{ color: '#fff' }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" sx={{ color: '#fff' }}>
                                <Twitter />
                            </IconButton>
                            <IconButton href="#" sx={{ color: '#fff' }}>
                                <Instagram />
                            </IconButton>
                            <IconButton href="#" sx={{ color: '#fff' }}>
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Form Card */}
                <Grid item xs={12} md={5} sx={{ display: 'flex' }} data-aos="fade-left">
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            backgroundColor: '#fff',
                            flexGrow: 1,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                            },
                        }}
                    >
                        <Typography variant="h5" color="primary" fontWeight={500} gutterBottom>
                            Contact Us
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField label="Username" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Email" type="email" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Phone" type="tel" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Message"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#1976d2',
                                        color: '#fff',
                                        '&:hover': {
                                            bgcolor: '#fff',
                                            color: '#1976d2',
                                        },
                                    }}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </Box>
    );
};

export default Contact;
