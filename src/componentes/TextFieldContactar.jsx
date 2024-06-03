import { TextField, ThemeProvider, createTheme,  } from '@mui/material';
import React from 'react';

const TextFieldContactar = ({id, label, type, width, value, onChange, error}) => {
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
        id={id}
        defaultValue={value}
        sx={{width: width}}
        label={label} 
        helperText={error}
        error={error ? true : false}
        color='myCustomColor'
        variant='outlined'
        margin='normal'
        type={type}
        onChange={onChange}
        />
        </ThemeProvider>
    );
};

export default TextFieldContactar;