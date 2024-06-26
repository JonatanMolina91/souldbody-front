import React from 'react';
import { Button } from '@mui/material';

const BotonCustom = ({ label, onClick, type, disabled }) => {
  return (
    <Button
      sx={{
        margin: 1,
        width: 'fit-content',
        height: 'fit-content',
        backgroundColor: '#001B00',
        borderRadius: '10px',
        '&:hover': { backgroundColor: "#087000" }
      }}
      disabled={disabled}
      type={type}
      variant="contained"
      onClick={onClick}>
        {label}
      </Button>
  );
};

export default BotonCustom;