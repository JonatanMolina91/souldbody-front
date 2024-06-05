import React, { useEffect, useState } from 'react';
import Clase from './Clase';
import { Box } from '@mui/material';
import claseServices from '../../services/claseServices';
import Loading from '../../componentes/Loading';


const Clases = () => {
    const {getVista} = claseServices;
    const [clases, setClases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async()=>{
          setClases(await getVista())
          setLoading(false);
        }
        )();
    }, []);

    

    return (
       <Box component='div'
       >
              {!loading?clases.map(clase => (
                <Clase key={clase.id} clase={clase}/>
              )):<Loading/>}
       </Box>
    );
};

export default Clases;