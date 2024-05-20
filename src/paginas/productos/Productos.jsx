import React from 'react';
import CardProducto from './card/CardProducto';
import { Grid } from '@mui/material';

const PRODUCTOS = [
    {
        id: 1,
        nombre: 'Pantalones deportivos',
        descripcion: 'Pantalones cortos deportidos',
        precio: 15.00
    },

    {
        id: 2,
        nombre: 'Camiseta',
        descripcion: 'Camiseta de algodón',
        precio: 10.00
    },
    {
        id: 3,
        nombre: 'Zapatos',
        descripcion: 'Zapatos deportivos',
        precio: 50.00
    },
    {
        id: 4,
        nombre: 'Gorra',
        descripcion: 'Gorra de béisbol',
        precio: 8.00
    },
    {
        id: 5,
        nombre: 'Calcetines',
        descripcion: 'Calcetines deportivos',
        precio: 5.00
    }
]

const Productos = () => {
    return (
        <Grid container
        padding={2}>
            {PRODUCTOS.map((producto)=> {
                return <Grid item xs={3} key={producto.id} 
                display='flex'
                justifyContent='center'>
                    <CardProducto producto={producto} />
                </Grid>
            })}
        </Grid>
    );
};

export default Productos ;