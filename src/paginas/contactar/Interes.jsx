import {FormGroup, Typography} from '@mui/material';
import React from 'react';
import CheckBoxContacto from './componentes/CheckBoxContacto';

const Interes = ({formik}) => {
  return (
    <FormGroup sx={{marginBottom: 5}}>
      <Typography  variant="h6">¿Que te interesa?</Typography>
      <CheckBoxContacto value={formik.values.bodyten} id="bodyten" formik={formik} label="Clase Bodyten" />
      <CheckBoxContacto value={formik.values.edurece} id="edurece" formik={formik}  label="Clase Edurece" />
      <CheckBoxContacto value={formik.values.souldfit} id="souldfit" formik={formik}  label="Clase SouldFit" />
      <CheckBoxContacto value={formik.values.libre} id="libre" formik={formik}  label="Por libre" />
    </FormGroup>
  );
};

export default Interes;