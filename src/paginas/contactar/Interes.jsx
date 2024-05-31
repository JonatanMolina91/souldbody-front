import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Interes = (formik) => {
  return (
    <FormGroup sx={{marginBottom: 5}}>
      <Typography  variant="h6">¿Que te interesa?</Typography>
      <CheckBoxContacto id="bodyTen" formik={formik} label="Clase Bodyten" />
      <CheckBoxContacto id="edurece" formik={formik}  label="Clase Edurece" />
      <CheckBoxContacto id="souldFit" formik={formik}  label="Clase SouldFit" />
      <CheckBoxContacto id="libre" formik={formik}  label="Por libre" />
    </FormGroup>
  );
};

export default Interes;