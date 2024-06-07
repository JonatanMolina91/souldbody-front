import React from 'react';
import {Card,  CardActionArea, CardMedia, CardContent, Typography, Box}from '@mui/material';
import getURL from  '../../../../env';

const CardProducto = ({ producto }) => {
  const URL = getURL();
    return (
        <Card
        sx={{ width:'50%',  marginBottom: 2}}>
           <CardMedia
           sx={{height:'50%', objectFit: 'contain'}}
             component="img"
             image={URL+producto.imagen}
             alt={"producto "+producto.nombre}
           />
           <CardContent
           sx={{
            display: 'flex',
            flexDirection: 'column',
            direction: 'column',
            justifyContent: 'center',
            height: '50%',
           }}
          >
             <Typography  color='#AA0000' gutterBottom variant="h5" component="div">
               {producto.nombre}
             </Typography>
             <Typography   variant="body2" color="text.secondary">
              {producto.descripcion}
             </Typography>
             <Box
             width='100%'
             display='flex'
             flexDirection='row'
             alignItems= 'center'>
             <Typography marginTop={1}  gutterBottom variant="h6" component="div">Precio</Typography>
             <Typography marginLeft={1} variant="h6">{producto.precio}€</Typography>
             </Box>
           </CardContent>
       </Card>
    );
};

export default CardProducto;