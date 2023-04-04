import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import './Navbar.css'



//trying to import FA icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

// Pages shown in bar and in burger menu
const pages = ['Skills', 'Projects', 'Contact'];

// Makes appbar responsive by handling burger menu
function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return ( 
        <AppBar position="static" >
            <Container maxWidth="xl" className='appbar'>
                <Toolbar disableGutters>
                    {/*fullscreen: Icon and word 'Logo'*/}
                    {/* <FontAwesomeIcon icon={faCoffee} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} /> */}
                    <BubbleChartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '3rem'}} />
                    <Typography
                    variant="h6"
                    noWrap
                    component="a" //a element tag
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' }, //dont display when screen tiny
                    fontFamily: 'Tourney',
                    fontSize: '2rem',
                    // fontWeight: 400,
                    // letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                    }}
                    >
                    Jen Hull
                    </Typography>


{/*this box is the hamburger menu: */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }} className='burger-box'>
            <IconButton     //hamburger icon
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className='menu-icon'
            >
                <MenuIcon />
            </IconButton>
            <Menu       //menu items in hamburger menu
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
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" className='xs-menu'>
                        <Link to={`/${page}`} className='xs-link'>
                        {page}
                        </Link> 
                    </Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box> {/*End of hamber menu*/}


            {/*stops icon displaying when big screen: */}
            <BubbleChartIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: '2rem' }} /> 

            {/* Logo just for mobile: */}
            <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Tourney',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            Jen Hull
            </Typography>

            {/*Fullscreen menu items: */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='fs-box'>
            {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                className='fs-buttons'
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link to={`/${page}`} className="fs-links">
                        {page}
                    </Link> 
                </Button>
            ))}
            </Box>
        </Toolbar>
        </Container>
    </AppBar>
    );
}

export default Navbar;
