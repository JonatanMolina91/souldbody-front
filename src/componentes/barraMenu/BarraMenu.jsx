import React, { useState } from 'react';
import { Button, Box, AppBar, Typography, IconButton, Toolbar, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { medidasBarraMenu } from './medidasBarraMenu';
import { Link } from 'react-router-dom';

const BarraMenu = () => {
  const pages = ['home', 'productos', 'clases', 'contactar'];
  const settings = ['login'];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function botonMenu(contenido, index) {
    return (
      <Button onClick={handleCloseNavMenu} key={index}>
        <Typography  to={contenido} component={Link}  fontSize={medidasBarraMenu.letrasMenu} sx={{ fontWeight: 'bold', color: 'menu.color.letras', textDecoration: 'none' }} variant='h5'>{contenido}</Typography>
      </Button>
    );
  }

  return (
    <AppBar sx={{
      backgroundColor: 'menu.color.fondo',
      display: 'flex',
    }}
      component={"div"}
      position="sticky"
    >
      <Toolbar>
        <Box sx={{ padding: '10px', flexGrow: 1, display: { xs: 'none', md: 'block' }, }}>
          {pages.map(botonMenu)}
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
           
              
            >
              <MenuIcon sx={{width: medidasBarraMenu.iconoMenu.width }}/>
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
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {pages.map(botonMenu)}
            </Box>
        </Menu>
        </Box>

        <IconButton onClick={handleOpenUserMenu} >
          <AccountCircle sx={{ color: 'black', width: medidasBarraMenu.iconoCuenta.width, height: medidasBarraMenu.iconoCuenta.width }} />
        </IconButton>
        <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography to={setting} component={Link} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

      </Toolbar>
    </AppBar>


  );
};

export default BarraMenu;