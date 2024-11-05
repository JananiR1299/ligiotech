import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ligiologo from '../ligiotech logo secondary .png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/About' },
  { name: 'Contact Us', path: '/Contact' }
];

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [ setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <ShowOnScroll {...props}>
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', boxShadow: 'none' }}>
        {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters>
          <Box
            component="img"
            src={ligiologo}
            alt="logoimage"
            sx={{
              width: '110px',
              height: 'auto',
              marginRight: '40px',
              marginLeft:'40px',
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              // width: { md: '80%', lg: '50%' }, // Adjusts width on medium and large screens
              // justifyContent: 'center', // Center aligns the buttons within the Box
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </ShowOnScroll>
  );
}

export default NavBar;
