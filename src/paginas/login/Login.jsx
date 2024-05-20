import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import TextFieldContactar from '../../componentes/TextFieldContactar';

const Login = () => {




  return (
    <Box
    component='div'
    display='flex'
    flexDirection={"column"}
    alignItems='center'
    justifyContent='center'
    height={"100vh"}>
    <Paper sx={{height: '200px'}} elevation={3}>
      <Box component='form'
      display='flex'
      flexDirection='column'
      padding={1}
      >
        <TextFieldContactar id='user' label='Usuario' type='text' />
        <TextFieldContactar id='password' label='Contraseña' type='password' />
      </Box>
    </Paper>
    </Box>
  );
};

export default Login;