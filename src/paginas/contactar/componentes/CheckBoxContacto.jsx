import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBoxContacto = ({label, formik, id, value}) => {

    return (
        <FormControlLabel sx={{width: 'fit-content'}} control={<Checkbox checked={value} onChange={(e) =>  formik.setFieldValue (id, e.target.checked) }  />} label={label} />
    );
};

export default CheckBoxContacto;