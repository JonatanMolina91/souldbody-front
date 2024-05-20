import { Box, Typography } from '@mui/material';
import React from 'react';
import { medidasSeccion } from './medidasSeccion';


const Articulo = ({articulo, reverse}) => {
    return (
        <Box component={'div'}
        display={'flex'}
        flexDirection={{xs:'column', lg:reverse?'row-reverse':"row"}}
        padding={1}
        >
            <Box width={{xs:"100%", lg:"50%"}} component={'div'}>
                <Typography fontSize={medidasSeccion.articulo.titulo} fontWeight={600} component={'h6'} variant='h6'>{articulo.titulo}</Typography>
                <Typography fontSize={medidasSeccion.articulo.texto} component={'p'} variant='body1'>{articulo.texto}</Typography>
            </Box>
            <Box sx={{'&>img':{width: medidasSeccion.articulo.imagen}}} width={{xs:"100%", lg:"50%"}} component={'div'}>
                <img  src={articulo.imagen}/>
            </Box>
        </Box>
    );
};

export default Articulo;