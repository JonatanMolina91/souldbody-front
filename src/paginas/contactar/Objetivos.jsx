import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Objetivos = ({formik}) => {
  return (
    <FormGroup  sx={{marginBottom: 5}}>
      <Typography variant="h6">¿Cual es tus objetivos?</Typography>
      <CheckBoxContacto value={formik.values.grasa} id="grasa" formik={formik}  label="Perder Grasas" />
      <CheckBoxContacto value={formik.values.musculatura} id="musculatura" formik={formik} label="Conseguir musculatura" />
      <CheckBoxContacto value={formik.values.elasticidad} id="elasticidad" formik={formik} label="Conseguir elasticidad" />
      <CheckBoxContacto value={formik.values.trabajo} id="trabajo" formik={formik} label="Preparación para un puesto de trabajo" />
      <CheckBoxContacto value={formik.values.rehabilitacion} id="rehabilitacion" formik={formik} label="Rehabilitación" />
    </FormGroup>
  );
};

export default Objetivos;