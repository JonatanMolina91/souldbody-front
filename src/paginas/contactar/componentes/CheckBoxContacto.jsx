import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBoxContacto = ({label}) => {
    

    return (
        <FormControlLabel control={<Checkbox  />} label={label} />
    );
};

export default CheckBoxContacto;