import React from 'react';
import iconFacebook from '../../assets/redesSociales/facebook.svg';
import iconInstagram from '../../assets/redesSociales/instagram.svg';
import iconYoutube from '../../assets/redesSociales/youtube.svg';
import iconTwitter from '../../assets/redesSociales/twitter.svg';
import logo from '../../assets/logo.svg';
import Grid from '@mui/material/Grid';
import fondo from '../../assets/fondoCabecera/fondoCabecera.svg';
import { medidasCabecera } from './medidasCabecera';

const Cabecera = () => {

    return (
        <Grid 
        container
        component="header" 
        sx={{backgroundImage: `url(${fondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            position: 'relative',
            top: medidasCabecera.cabeceraTop,
        }}
        >
            <Grid component="div"
                item
                xs={6}
                display={'flex'}
                justifyContent={'end'}
                sx={{"&>img": {width: medidasCabecera.logo}}}
                >
                <img  className="logo-cabecera" src={logo} />  
               
            </Grid>  
            <Grid item 
            xs={6}
            display={'flex'}
            justifyContent={'end'}
            alignItems={'start'}
            height={'100%'}
            width={'100%'}
            component="div"
            sx={{
                '&>img': {width: medidasCabecera.iconosSocial, height: '100%', marginRight: '10px'},
            }}
                >
                <img src={iconTwitter} />
                <img src={iconYoutube} />
                <img src={iconInstagram} />
                <img src={iconFacebook} />
            </Grid > 
             
               
        </Grid >
    );
};

export default Cabecera;