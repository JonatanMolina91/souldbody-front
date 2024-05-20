import React from 'react';
import Clase from './Clase';
import { Box } from '@mui/material';

const CLASES = [
    {
        id: 1,
        titulo: 'Warcraft Cronicas - Historia Completa de World of Warcraft',
        url: 'https://www.youtube.com/embed/c07OkDyphyE',
        descripcion: 'En este video se cuenta la historia completa de World of Warcraft, desde sus inicios en Warcraft 1 hasta la actualidad en Shadowlands.'
    },
    {
        id: 2,
        titulo: 'Warcraft Cronicas - Historia Completa de World of Warcraft',
        url: 'https://www.youtube.com/embed/c07OkDyphyE',
        descripcion: 'En este video se cuenta la historia completa de World of Warcraft, desde sus inicios en Warcraft 1 hasta la actualidad en Shadowlands.'
    },
    {
        id: 3,
        titulo: 'Warcraft Cronicas - Historia Completa de World of Warcraft',
        url: 'https://www.youtube.com/embed/c07OkDyphyE',
        descripcion: 'En este video se cuenta la historia completa de World of Warcraft, desde sus inicios en Warcraft 1 hasta la actualidad en Shadowlands.'
    }
]

const Clases = () => {
    return (
       <Box component='div'
       >
              {CLASES.map(clase => (
                <Clase key={clase.id} clase={clase}/>
              ))}
       </Box>
    );
};

export default Clases;