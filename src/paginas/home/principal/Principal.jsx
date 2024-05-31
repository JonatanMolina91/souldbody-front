import { Container, Box, Button, Typography } from '@mui/material';
import React from 'react';
import imagenPrincipal from '../../../assets/fotosPrincipal/principal.png';
import { medidasPrincipal } from './medidasPrincipal';
import { useNavigate } from 'react-router-dom';



const Principal = () => {

  const navigate = useNavigate();
    return (
       <Box >
              <Box
              sx={{
                backgroundImage: `url(${imagenPrincipal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '69vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              
              >
                <Typography sx={{fontSize:medidasPrincipal.letrasTitulo}} color={'white'} component={'h1'} variant='h1'>SOULBODY</Typography>
                <Typography sx={{textAlign: "center", fontSize:medidasPrincipal.letrasSubtitulo}} color={'white'} component={'h2'} variant='h2'>CENTRO DE ENTRENAMIENTO Y ACONDICIONAMIENTO FISICO</Typography>
                <Button
              sx={{
                fontSize: medidasPrincipal.letrasBoton,
                backgroundColor: 'white',
                color: '#001B00',
                 borderRadius: '10px',
                 '&:hover': { backgroundColor: "#087000" }
              }} 
              variant="contained"
              onClick={()=>navigate('/contactar')}
              >apuntate</Button>

              </Box>
       </Box>
    );
};

export default Principal;