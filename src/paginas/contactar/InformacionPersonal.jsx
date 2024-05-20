import React from 'react';
import { Box, Typography } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';

const InformacionPersonal = () => {
   

    return (
        <Box
        component={"div"}
        padding={1}
        display="flex"
        flexDirection="column">
          <Typography variant="h6">Información personal</Typography>
        <TextFieldContactar
          id="nombre"
          label="Nombre" />
        <TextFieldContactar
          id="apellidos"
          label="Apellidos" />
        <TextFieldContactar
          id="email"
          label="Email" />
      </Box>
    );
};

export default InformacionPersonal;