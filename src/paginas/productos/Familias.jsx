import React, { useEffect, useState } from 'react';
import CartProducto from './card/CardFamilia';
import { Box, Grid } from '@mui/material';
import productoServices from '../../services/productosServices';



function Familias() {
    const {getCategorias} = productoServices;

    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
       ( async()=> setCategorias(await getCategorias()))();
    },[])

    useEffect(()=>console.log(categorias),[categorias]);

    return (
        <Grid container 
        padding={1}>
            {categorias.map((categoria) => {
                    return <Grid item xs={6}
                    display='flex'
                    key={categoria.id}
                    justifyContent='center'>
                    <CartProducto 
                        categoria={categoria} />
                    </Grid>
            })}
        </Grid>
    );

}

export default Familias;