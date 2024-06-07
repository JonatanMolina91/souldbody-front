import React from 'react';
import { Box, Typography } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';

const InformacionPersonal = ({formik}) => {
   

    return (
        <Box
        component={"div"}
        padding={1}
        display="flex"
        marginBottom={10}
        flexDirection="column">
          <Typography variant="h6">Información personal</Typography>
        <TextFieldContactar
          id="nombre"
          va={formik.values.nombre}
          error={formik.errors.nombre}
          onChange={formik.handleChange}
          width={300}
          label="Nombre" />
        <TextFieldContactar
          id="apellidos"
          va={formik.values.apellidos}
          error={formik.errors.apellidos}
          onChange={formik.handleChange}
          width={300}
          label="Apellidos" />
        <TextFieldContactar
          id="email"
          va={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          width={300}
          label="Email" />
      </Box>
    );
};

export default InformacionPersonal;