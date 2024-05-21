import { TextField, ThemeProvider, createTheme,  } from '@mui/material';
import React from 'react';

const TextFieldContactar = ({id, label, type, width}) => {
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
        label={label} 
        color='myCustomColor'
        variant='outlined'
        margin='normal'
        type={type}
        />
        </ThemeProvider>
    );
};

export default TextFieldContactar;