import { TextField } from '@mui/material';
import React from 'react';

const TextFieldContactar = ({id, label, type, width}) => {
    return (
        <TextField
        id={id}
        label={label} 
        variant='filled'
        margin='normal'
        type={type}
        sx={{width: width}}
        />
    );
};

export default TextFieldContactar;