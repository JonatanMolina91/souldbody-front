import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CardFamilia() {
  return (
    <Card
     sx={{ width:'50%', marginBottom: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={'/src/assets/fotosFamilias/suplementos.jpg'}
          alt="green iguana"
        />
        <CardContent
        sx={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" component="div">
            Suplementos deportivos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los suplementos deportivos son productos diseñados para complementar la dieta y mejorar el rendimiento físico durante la práctica de ejercicio. Estos suplementos pueden incluir proteínas, aminoácidos, vitaminas, minerales y otros nutrientes que ayudan a optimizar el crecimiento muscular, la recuperación y la energía. Además, los suplementos deportivos también pueden ayudar a mejorar la resistencia, la fuerza y la capacidad de entrenamiento.
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  );
}