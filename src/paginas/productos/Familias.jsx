import React, { useEffect, useState } from 'react';
import CartProducto from './card/CardFamilia';
import { Box, Grid } from '@mui/material';
import categoriaServices from '../../services/categoriaServices';
import Loading from '../../componentes/Loading';



function Familias() {
    const {getCategorias} = categoriaServices;
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       ( async()=> {
        setCategorias(await getCategorias());
        setLoading(false);
    })();
    },[])

  

    return (
        !loading?<Grid container 
        padding={1}>
            {categorias.map((categoria) => {
                    return <Grid item xs={12} md={6}
                    display='flex'
                    key={categoria.id}
                    justifyContent='center'>
                    <CartProducto 
                        categoria={categoria} />
                    </Grid>
            })}
        </Grid>:<Loading/>
    );

}

export default Familias;