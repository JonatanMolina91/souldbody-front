import React, { useEffect, useState } from 'react';
import Clase from './Clase';
import { Box } from '@mui/material';
import claseServices from '../../services/claseServices';


const Clases = () => {
    const {getVista} = claseServices;
    const [clases, setClases] = useState([]);

    useEffect(() => {
        (async()=>setClases(await getVista()))();
    }, []);

    

    return (
       <Box component='div'
       >
              {clases.map(clase => (
                <Clase key={clase.id} clase={clase}/>
              ))}
       </Box>
    );
};

export default Clases;