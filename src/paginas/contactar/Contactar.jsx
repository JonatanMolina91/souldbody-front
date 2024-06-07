import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InformacionPersonal from './InformacionPersonal';
import Interes from './Interes';
import Objetivos from './Objetivos';
import BotonCustom from '../../componentes/BotonCustom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import contactarSerives from '../../services/contactarSerives';
import AlertCustom from '../../componentes/AlertCustom';

const Contactar = () => {


  const {postContactar} = contactarSerives;
  const [send, setSend] = useState(false);
  const [alert, setAlert] = useState({open: false, message: '', type: ''});

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidos: '',
      email: '',
      bodyTen: false,
      edurece: false,
      souldFit: false,
      libre: false,
      grasa: false,
      musculatura: false,
      elasticidad: false,
      trabajo: false,
      rehabilitacion: false,
      algoMas: '',
    },
    onSubmit: values => {
      sendForm(values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Nombre requerido"),
      apellidos: Yup.string().required("Apellidos requeridos"),
      email: Yup.string().email("Email no válido").required("Email requerido"),
      bodyten: Yup.boolean(),
      edurece: Yup.boolean(),
      souldfit: Yup.boolean(),
      libre: Yup.boolean(),
      grasa: Yup.boolean(),
      musculatura: Yup.boolean(),
      elasticidad: Yup.boolean(),
      trabajo: Yup.boolean(),
      rehabilitacion: Yup.boolean(),
    })
  });

  async function sendForm(values) {
    setSend(true);
    postContactar(values);
    formik.resetForm();
    setSend(false);
    setAlert({open: true, message: 'Se a enviado el formulario', type: 'success'});
    setTimeout(() => {
      setAlert({open: false, message: '', type: ''});
    }, 3000);
  }
  
  return (
    <Box
      component={"form"}
      padding={5}
      onSubmit={formik.handleSubmit}
      display="flex"
      flexDirection="column"
      marginBottom={3}>
      <Typography width='100%' textAlign='center' variant="h4">Contacta con nosotros</Typography>
      <InformacionPersonal formik={formik} />
      <Interes formik={formik}/>
      <Objetivos formik={formik}/>
      <TextField
        id="algoMas"
        value={formik.values.algoMas}
        label="Cúentanos algo mas"
        multiline
        onChange={formik.handleChange}
        rows={4}
        sx={{ width: 300 }}
      />
      <Box component={"div"} width='100%' textAlign='center'>
        <BotonCustom disabled={send} type="submit" label='Enviar' />
      </Box>
      <AlertCustom open={alert.open} message={alert.message} type={alert.type} />
    </Box>
  );
};

export default Contactar;