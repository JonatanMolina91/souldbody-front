import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import loginServices from '../../services/loginServices';
import { useUser } from '../../context/userProvider';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AlertCustom from '../../componentes/AlertCustom';

const Login = () => {

  
  const {login} = loginServices;
  const {setLogin} = useUser();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({message: '', type: '', show: false});
  const [send, setSend] = useState(false);

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
  

async function sendForm(values) {
  setSend(true);
  let datos = await login(values); 
  if(datos.status === 200){
    setCookie("token", datos.data.token);
    setCookie("rol", datos.data.rol);
    setCookie("id", datos.data.user.id);
    setCookie("email", datos.data.user.email);
    setCookie("nombre", datos.data.user.nombre);
    setCookie("apellidos", datos.data.user.apellidos);
    setCookie("foto", datos.data.user.foto);
    setLogin();
    navigate('/dashboard');
  } else{
  if(datos.status === 401){
    setAlert({message: datos.data.message, type: "error", show: true});
  }
  if(datos.status === 500){
    setAlert({message: datos.data.message, type: "error", show: true});
  }
  setTimeout(() => {
    setAlert({message: '', type: '', show: false});
  }, 3000);
}
  setSend(false);
}

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: values => {
    sendForm(values);
  },
  validationSchema: Yup.object({
    email: Yup.string().email("Email no válido").required("Email requerido"),
    password: Yup.string().required("Contraseña requerida"),
  })
});


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
      onSubmit={formik.handleSubmit}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      alignContent={"center"}
      height='90%'
      padding={1}
      >
        <TextFieldContactar 
        disabled={send}
        value={formik.values.email} 
        label={'Email'}
        id='email'
        type={'email'}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
        <TextFieldContactar 
        disabled={send}
        value={formik.values.password} 
        label={'Contraseña'}
        id='password'
        type={'password'}
        onChange={formik.handleChange}
        error={formik.errors.password}/>
        <BotonCustom disabled={send} type="submit" label='Iniciar Sesión' />
      </Box>
    </Paper>
    {alert.show? <AlertCustom message={alert.message} type={alert.type}></AlertCustom>:null}
    </Box>
  );
};

export default Login;