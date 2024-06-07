import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import getURL from  '../../../../env';


export default function CardFamilia({categoria}) {
  const URL = getURL();
  return (
    <Card
     sx={{ width:'50%', marginBottom: 2}}>
      <CardActionArea sx={{height:"100%"}}>
        <Box sx={{textDecoration: "none", color:"black"}} to={"/productos/"+categoria.id} component={Link}>
        <CardMedia
          component="img"
          image={URL+categoria.imagen}
          alt={"foto categoria "+ categoria.nombre}
        />
        <CardContent
        sx={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            {categoria.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {categoria.descripcion}
          </Typography>
        </CardContent>
        </Box>
        </CardActionArea>
    </Card>
  );
}