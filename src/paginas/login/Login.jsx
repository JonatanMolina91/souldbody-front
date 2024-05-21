import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';

const Login = () => {




  return (
    <Box
    component='div'
    display='flex'
    flexDirection={"column"}
    alignItems='center'
    justifyContent='center'
    height={"50vh"}>
    <Paper sx={{ padding:3 }} elevation={3}>
      <Box component='form'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      alignContent={"center"}
      height='90%'
      padding={1}
      >
        <TextFieldContactar id='user' label='Usuario' type='text' />
        <TextFieldContactar id='password' label='Contraseña' type='password' />
        <BotonCustom label='Iniciar Sesión' />
      </Box>

    </Paper>
    </Box>
  );
};

export default Login;