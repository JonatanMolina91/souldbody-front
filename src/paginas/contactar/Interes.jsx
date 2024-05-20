import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Interes = () => {
  return (
    <FormGroup>
      <Typography variant="h6">¿Que te interesa?</Typography>
      <CheckBoxContacto label="Clase Bodyten" />
      <CheckBoxContacto label="Clase Edurece" />
      <CheckBoxContacto label="Clase SouldFit" />
      <CheckBoxContacto label="Por libre" />
    </FormGroup>
  );
};

export default Interes;