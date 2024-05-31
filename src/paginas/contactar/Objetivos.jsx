import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Objetivos = (formik) => {
  return (
    <FormGroup  sx={{marginBottom: 5}}>
      <Typography variant="h6">¿Cual es tus objetivos?</Typography>
      <CheckBoxContacto id="grasa" formik={formik}  label="Perder Grasas" />
      <CheckBoxContacto id="musculatura" formik={formik} label="Conseguir musculatura" />
      <CheckBoxContacto id="elasticidad" formik={formik} label="Conseguir elasticidad" />
      <CheckBoxContacto id="trabajo" formik={formik} label="Preparación para un puesto de trabajo" />
      <CheckBoxContacto id="rehabilitacion" formik={formik} label="Rehabilitación" />
    </FormGroup>
  );
};

export default Objetivos;