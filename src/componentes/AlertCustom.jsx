import { Alert } from '@mui/material';
import React from 'react';

const AlertCustom = ({ message, type }) => {
    return (
        <Alert severity={type}>{message}</Alert>
    );
};

export default AlertCustom;