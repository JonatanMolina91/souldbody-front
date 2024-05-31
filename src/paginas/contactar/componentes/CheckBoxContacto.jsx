import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBoxContacto = ({label, formik, id}) => {
    

    return (
        <FormControlLabel sx={{width: 'fit-content'}} control={<Checkbox onChange={(e) =>  formik.formik.setFieldValue (id, e.target.checked) }  />} label={label} />
    );
};

export default CheckBoxContacto;