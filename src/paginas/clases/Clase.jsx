import { Box, Typography } from '@mui/material';
import React from 'react';

const Clase = ({clase}) => {
    return (
       <Box 
       width="100%" 
       component='div'
       display='flex'
       marginBottom={"1%"} 
       padding={"5%"}
       flexDirection={{xs: 'column', sm: 'column', md: 'row'}}
       >
        <Box  height={{xs:"300px", sm:"300px", md:"500px", lg:"600px",  xl: "600px"}}  width={{xs: '100%', sm: '100%', md: '50%'}}component='div'>
        <iframe width={"90%"} height={"100%"} src={"https://www.youtube.com/embed/"+clase.video} title={clase.nombre}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </Box>
       <Box paddingLeft={1}  width={{xs: '90%', sm: '90%', md: '40%'}} component='div'>
        <Typography fontSize={50} textAlign="center" color="#AA0000" variant='h4'>{clase.nombre}</Typography>
        <Typography textAlign={'justify'} fontSize={20} variant='body1'>{clase.descripcion}</Typography>
       </Box>
       </Box>
    );
};

export default Clase;