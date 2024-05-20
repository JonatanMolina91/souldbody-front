import React from 'react';
import { Button } from '@mui/material';

const BotonCustom = ({label}) => {
    return (
        <Button 
        sx={{ width: 'fit-content',
    backgroundColor: '#001B00', 
    borderRadius: '10px',}} 
        variant="contained">{label}</Button>
    );
};

export default BotonCustom;