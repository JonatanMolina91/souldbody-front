import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import InformacionPersonal from './InformacionPersonal';
import Interes from './Interes';
import Objetivos from './Objetivos';
import BotonCustom from '../../componentes/BotonCustom';

const Contactar = () => {
  return (
    <Box
      component={"form"}
      padding={1}
      display="flex"
      flexDirection="column"
      marginBottom={3}>
      <Typography width='100%' textAlign='center' variant="h4">Contacta con nosotros</Typography>
      <InformacionPersonal />
      <Interes />
      <Objetivos />
      <TextField
        id="outlined-multiline-static"
        label="Cúentanos algo mas"
        multiline
        rows={4}
        sx={{ width: '30%' }}
      />
      <Box width='100%' textAlign='center'>
        <BotonCustom label='Enviar' />
      </Box>
    </Box>
  );
};

export default Contactar;