import React, { useEffect, useState } from 'react';
import CardProducto from './card/CardProducto';
import { Grid } from '@mui/material';
import categoriaServices from '../../services/categoriaServices';
import { useParams } from 'react-router-dom';





const Productos = () => {

    const [productos, setProductos] = useState([]);
    const {getProductos} = categoriaServices;
    const { id } = useParams();

    useEffect(()=>{
        (async() => setProductos(await getProductos(id)))();
    }
    ,[]);

    useEffect(()=>console.log(productos),[productos]);

    return (
        <Grid container
        padding={2}>
            {productos.map((producto)=> {
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