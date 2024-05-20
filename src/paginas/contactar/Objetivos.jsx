import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Objetivos = () => {
  return (
    <FormGroup>
      <Typography variant="h6">¿Cual es tus objetivos?</Typography>
      <CheckBoxContacto label="Perder Grasas" />
      <CheckBoxContacto label="Conseguir musculatura" />
      <CheckBoxContacto label="Conseguir elasticidad" />
      <CheckBoxContacto label="Preparación para un puesto de trabajo" />
      <CheckBoxContacto label="Rehabilitación" />
    </FormGroup>
  );
};

export default Objetivos;