import React from 'react';
import CartProducto from './card/CardFamilia';
import { Box, Grid } from '@mui/material';

const FAMILIAS = [
    {
        id: 1,
        nombre: 'Suplementos deportivos',
        descripcion: 'Los suplementos deportivos son productos diseñados para complementar la dieta y mejorar el rendimiento físico durante la práctica de ejercicio. Estos suplementos pueden incluir proteínas, aminoácidos, vitaminas, minerales y otros nutrientes que ayudan a optimizar el crecimiento muscular, la recuperación y la energía. Además, los suplementos deportivos también pueden ayudar a mejorar la resistencia, la fuerza y la capacidad de entrenamiento.',
        imagen: 'suplementos.jpg'
    },
    {
        id: 2,
        nombre: 'Ropa deportiva',
        descripcion: 'La ropa deportiva es una prenda de vestir diseñada para la práctica de deportes y actividades físicas. Esta ropa se caracteriza por ser cómoda, transpirable y resistente, lo que permite una mayor libertad de movimiento y comodidad durante el ejercicio. Además, la ropa deportiva también puede incluir tecnologías y materiales especiales que ayudan a mejorar el rendimiento y la comodidad del deportista.',
        imagen: 'ropa.jpg'
    },
    {
        id: 3,
        nombre: 'Calzado deportivo',
        descripcion: 'El calzado deportivo es un tipo de zapato diseñado para la práctica de deportes y actividades físicas. Este calzado se caracteriza por ser cómodo, resistente y flexible, lo que permite una mayor libertad de movimiento y comodidad durante el ejercicio. Además, el calzado deportivo también puede incluir tecnologías y materiales especiales que ayudan a mejorar el rendimiento y la comodidad del deportista.',
        imagen: 'calzado.jpg'
    }
];

function Familias() {
    return (
        <Grid container 
        padding={1}>
            {FAMILIAS.map((producto) => {
                    return <Grid item xs={6}
                    display='flex'
                    key={producto.id}
                    justifyContent='center'>
                    <CartProducto 
                        producto={producto} />
                    </Grid>
            })}
        </Grid>
    );

}

export default Familias;