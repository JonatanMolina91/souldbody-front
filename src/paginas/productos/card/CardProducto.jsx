import React from 'react';
import {Card,  CardActionArea, CardMedia, CardContent, Typography, Box}from '@mui/material';
import getURL from  '../../../../env';

const CardProducto = ({ producto }) => {
  const URL = getURL();
    return (
        <Card
        sx={{ width:'50%', marginBottom: 2}}>
         <CardActionArea>
           <CardMedia
             component="img"
             image={URL+producto.imagen}
             alt={"producto "+producto.nombre}
           />
           <CardContent
           sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
           }}
          >
             <Typography textAlign='center' color='#AA0000' gutterBottom variant="h5" component="div">
               {producto.nombre}
             </Typography>
             <Typography textAlign='center'  variant="body2" color="text.secondary">
              {producto.descripcion}
             </Typography>
             <Box
             width='100%'
             display='flex'
             flexDirection='row'
             alignItems= 'center'>
             <Typography margin={0} color='#AA0000' gutterBottom variant="h5" component="div">Precio</Typography>
             <Typography marginLeft={1} variant="body2" color="text.secondary">{producto.precio}€</Typography>
             </Box>
           </CardContent>
           </CardActionArea>
       </Card>
    );
};

export default CardProducto;