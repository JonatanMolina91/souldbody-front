import React, { useEffect, useState } from 'react';
import CardProducto from './card/CardProducto';
import { Grid } from '@mui/material';
import categoriaServices from '../../services/categoriaServices';
import { useParams } from 'react-router-dom';
import Loading from '../../componentes/Loading';





const Productos = () => {

    const [productos, setProductos] = useState([]);
    const {getProductos} = categoriaServices;
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async() => {
            setProductos(await getProductos(id));
            setLoading(false);
        })();
    }
    ,[]);

   

    return (
        !loading?<Grid container
        padding={2}>
            {productos.map((producto)=> {
                return <Grid item xs={12} md={6} key={producto.id} 
                display='flex'
                justifyContent='center'>
                    <CardProducto producto={producto} />
                </Grid>
            })}
        </Grid>:<Loading/>
    );
};

export default Productos ;