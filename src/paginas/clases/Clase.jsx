import { Box, Typography } from '@mui/material';
import React from 'react';

const Clase = () => {
    return (
       <Box 
       width="100%" 
       height={{xs:"1000px", sm:"1000px", md:"500px", lg:"600px",  xl: "800px"}}
       component='div'
       display='flex'
       marginBottom={"1%"} 
       padding={"5%"}
       flexDirection={{xs: 'column', sm: 'column', md: 'row'}}
       >
        <Box  height={{xs:"1000px", sm:"1000px", md:"500px", lg:"600px",  xl: "800px"}}  width={{xs: '100%', sm: '100%', md: '50%'}}component='div'>
        <iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/NOz-k29LcdI" title="hola"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        </Box>
       <Box padding={"3%"}  width={{xs: '100%', sm: '100%', md: '50%'}} component='div'>
        <Typography textAlign="center" color="#AA0000" variant='h4'>Warcraft Cronicas - Historia Completa de World of Warcraft</Typography>
        <Typography variant='body1'>En este video se cuenta la historia completa de World of Warcraft, desde sus inicios en Warcraft 1 hasta la actualidad en Shadowlands.
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
       </Box>
       </Box>
    );
};

export default Clase;