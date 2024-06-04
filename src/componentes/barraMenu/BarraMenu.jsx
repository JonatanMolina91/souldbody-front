import React, { useState } from 'react';
import { Button, Box, AppBar, Typography, IconButton, Toolbar, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { medidasBarraMenu } from './medidasBarraMenu';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userProvider';

const BarraMenu = () => {
  const pages = ['home', 'productos', 'clases', 'contactar'];
  const { user } = useUser();
  const settings = user.rol === '' ? ['login'] : ['logout', 'dashboard'];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { setLogout } = useUser();
  const navigate = useNavigate();

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
        <Typography to={"/" + contenido} component={Link} fontSize={medidasBarraMenu.letrasMenu} sx={{ fontWeight: 'bold', color: 'menu.color.letras', textDecoration: 'none' }} variant='h5'>{contenido}</Typography>
      </Button>
    );
  }

  function menuSetting() {
    if (user.rol === "") {
      return (
        <MenuItem>
          <Typography sx={{ textDecoration: "none", color: "black" }}
            to={"/login"} component={Link}
            textAlign="center">{"login".toUpperCase()}</Typography>
        </MenuItem>);
    } else {
      return (
        <Box>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography sx={{ textDecoration: "none", color: "black" }}
              component={Link}
              onClick={halderLogout}
              textAlign="center">{"logout".toUpperCase()}</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography sx={{ textDecoration: "none", color: "black" }}
              to={"/dashboard"} component={Link}
              textAlign="center">{"dashboard".toUpperCase()}</Typography>
          </MenuItem>
        </Box>);
    }
  }

  function halderLogout() {
    console.log("logout");
    setLogout();
    navigate('/');
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
            <MenuIcon sx={{ width: medidasBarraMenu.iconoMenu.width }} />
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
        <Tooltip title={user.nombre}>
        <Avatar
        sx={{cursor: "pointer"}}
          onClick={handleOpenUserMenu}
          src={user.foto === ""?"/broken-image.jpg":"https://souldbody-337c4235c4cf.herokuapp.com/"+user.foto}
        />
        </Tooltip>
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
          {menuSetting()}

        </Menu>

      </Toolbar>
    </AppBar>


  );
};

export default BarraMenu;