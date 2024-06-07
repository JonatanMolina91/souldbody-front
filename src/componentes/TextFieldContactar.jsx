import { TextField, ThemeProvider, createTheme,  } from '@mui/material';
import React from 'react';

const TextFieldContactar = ({id, label, type, width, value, onChange, error, min, disabled, va}) => {
    const theme = createTheme({
        palette: {
          myCustomColor: {
            main: '#087000',
          },
        },
      });
    return (
        <ThemeProvider theme={theme}>
        <TextField
        disabled={disabled}
        id={id}
        defaultValue={value}
        value={va}
        sx={{width: width}}
        label={label} 
        helperText={error}
        error={error ? true : false}
        color='myCustomColor'
        variant='outlined'
        margin='normal'
        type={type}
        onChange={onChange}
        inputProps={{min: min}}
        />
        </ThemeProvider>
    );
};

export default TextFieldContactar;