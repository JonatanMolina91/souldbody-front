import React from 'react';
import iconFacebook from '../../assets/redesSociales/facebook.svg';
import iconInstagram from '../../assets/redesSociales/instagram.svg';
import iconYoutube from '../../assets/redesSociales/youtube.svg';
import iconTwitter from '../../assets/redesSociales/twitter.svg';
import logo from '../../assets/logo.svg';
import Grid from '@mui/material/Grid';
import fondo from '../../assets/fondoCabecera/fondoCabecera.svg';
import { medidasCabecera } from './medidasCabecera';
import { CardMedia, IconButton } from '@mui/material';


const Cabecera = () => {



    return (
        <Grid
            container
            component="header"
            sx={{
                backgroundImage: `url(${fondo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
              
            }}
        >
            <Grid component="div"
                item
                xs={6}
                display={'flex'}
                justifyContent={'end'}
                sx={{ "&>img": { width: medidasCabecera.logo } }}
            >
                <img className="logo-cabecera" src={logo} />

            </Grid>
            <Grid item
                xs={6}
                display={'flex'}
                justifyContent={'end'}
                
                height={'100%'}
                width={'100%'}
                component="div"
               
            >
                <IconButton onClick={()=>window.location.href='https://x.com/'}  >
                    <CardMedia
                    sx={{width: medidasCabecera.iconosSocial, height:medidasCabecera.iconosSocial}}
                        component="img"
                        image={iconTwitter}/>
                </IconButton >
                <IconButton onClick={()=>window.location.href='https://www.youtube.com/'} >
                <CardMedia
                sx={{width: medidasCabecera.iconosSocial, height:medidasCabecera.iconosSocial}}
                        component="img"
                        image={iconYoutube}/>
                </IconButton>
                <IconButton onClick={()=>window.location.href='https://www.instagram.com/'} >
                <CardMedia
                sx={{width: medidasCabecera.iconosSocial, height:medidasCabecera.iconosSocial}}
                        component="img"
                        image={iconInstagram}/>
                </IconButton>
                <IconButton onClick={()=>window.location.href='https://www.facebook.com/'} >
                <CardMedia
                sx={{width: medidasCabecera.iconosSocial, height:medidasCabecera.iconosSocial}}
                        component="img"
                        image={iconFacebook}/>
                </IconButton>
            </Grid >


        </Grid >
    );
};

export default Cabecera;