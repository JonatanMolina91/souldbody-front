import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import loginServices from '../../services/loginServices';
import { useUser } from '../../context/userProvider';

const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const {login} = loginServices;
  const {setLogin} = useUser();

  function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // agregar otros valores predeterminados si es necesario
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
  

async function send(event) {
  event.preventDefault();
  
  let datos = await login({email:user, password:password});
  
  if(datos.status === 200){
    setCookie("token", datos.data.token);
    setCookie("rol", datos.data.rol);
    setLogin();
  } 
  
}


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
      onSubmit={send}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      alignContent={"center"}
      height='90%'
      padding={1}
      >
        <TextFieldContactar value={user} onChange={(event)=>setUser(event.target.value)} id='user' label='Usuario' type='text' />
        <TextFieldContactar value={password} onChange={(event)=>setPassword(event.target.value)} id='password' label='Contraseña' type='password' />
        <BotonCustom type="submit" label='Iniciar Sesión' />
      </Box>

    </Paper>
    </Box>
  );
};

export default Login;