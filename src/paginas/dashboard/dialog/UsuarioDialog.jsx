import { Box, Button, Dialog, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UsuarioDialog = ({ openDailog, setOpenDialog, formik, deleter }) => {

  const { funciones } = useFunciones();

  useEffect(() => {
    console.log("creacion del duialogo"); 
  }, []);

  


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  





  function Guardar() {
    console.log(values);
    if (funciones.create !== undefined) {
     console.log(values);
     funciones.create(values);
   }

   if (funciones.update !== undefined) {
     funciones.update(values.id, values);
   }
   setOpenDialog(false); 
  }

  return (
   formik?.handleSubmit !== undefined?<Dialog
      open={openDailog}
      onClose={handleClose}>
      <Box
        component={'form'}
        onSubmit={formik.handleSubmit}>

        <Box
          padding={2}
          display="flex"
          flexDirection="column"
        >
          <TextFieldContactar
            id={'nombre'}
            label={'Nombre'}
            error={formik.errors.nombre}
            value={formik.values.nombre}
            onChange={formik.handleChange}
            type="text"
            width="90%"
          />
          <TextFieldContactar
            id={'apellidos'}
            label={'Apellidos'}
            value={formik.values.apellidos}
            onChange={formik.handleChange}
            type="text"
            width="90%"
          />
          <TextFieldContactar
            id={'email'}
            label={'Email'}
            error={formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            width="90%"
          />
          <TextFieldContactar
            id={'password'}
            label={'Contraseña'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            type="password"
            width="90%"
          />
          <TextFieldContactar
            id={'repeatPassword'}
            label={'Repite contraseña'}
            value={formik.values.repeatPassword}
            error={formik.errors.repeatPassword}
            onChange={formik.handleChange}
            type="password"
            width="90%"
          />
          <input onChange={(e) => formik.setFieldValue(e.target.files[0])} accept='image/*' type='file' />
        </Box>
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"space-around"}>
          <BotonCustom type={'submit'} label="Guardar" />
          {formik.id !== -1 ? <BotonCustom onClick={() => { deleter(row.id); setOpenDialog(false); }} label="Eliminar" /> : null}
          <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
        </Box>
      </Box>
    </Dialog>
  :null);

};

export default UsuarioDialog;