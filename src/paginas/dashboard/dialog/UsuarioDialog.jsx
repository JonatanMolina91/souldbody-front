import { Box, Button, Dialog, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';


const UsuarioDialog = ({ openDailog, setOpenDialog, formik, deleter }) => {

  

  const handleClose = () => {
    setOpenDialog(false);
  };



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
          <input onChange={(e) => formik.setFieldValue('foto',e.target.files[0])} accept='image/*' type='file' />
        </Box>
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"space-around"}>
          <BotonCustom onClick={()=>formik.isValid?setOpenDialog(false):null} type={'submit'} label="Guardar" />
          {formik.values.id !== -1 ? <BotonCustom onClick={() => { deleter(formik.values.id); setOpenDialog(false); }} label="Eliminar" /> : null}
          <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
        </Box>
      </Box>
    </Dialog>
  :null);

};

export default UsuarioDialog;