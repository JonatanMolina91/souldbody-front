import React from 'react';
import {Card,  CardActionArea, CardMedia, CardContent, Typography, Box}from '@mui/material';

const CardProducto = ({ producto }) => {
    return (
        <Card
        sx={{ width:'50%', marginBottom: 2}}>
         <CardActionArea>
           <CardMedia
             component="img"
             image={'/src/assets/fotosProductos/pantalones.jpg'}
             alt="green iguana"
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
               Pantalones deportivos
             </Typography>
             <Typography textAlign='center'  variant="body2" color="text.secondary">
              Pantalones cortos deportivos de color negro de la marca adidas
             </Typography>
             <Box
             width='100%'
             display='flex'
             flexDirection='row'
             alignItems= 'center'>
             <Typography margin={0} color='#AA0000' gutterBottom variant="h5" component="div">Precio</Typography>
             <Typography marginLeft={1} variant="body2" color="text.secondary">15,00€</Typography>
             </Box>
           </CardContent>
           </CardActionArea>
       </Card>
    );
};

export default CardProducto;