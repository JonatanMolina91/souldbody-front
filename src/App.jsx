import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, alpha } from '@mui/material/styles';
import Router from './router/index';
import { FuncionesProvider } from './context/dialogProvider';
import { UserProvider, useUser } from './context/userProvider';


function App() {

  

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
      menu: {
        color: {
          fondo: alpha('#087000', 0.6),
          letras: '#001B00',
        },
      },
      pie: {
        color: {
          fondo: '#009400',
          letras: '#ffffff',
        },
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <FuncionesProvider>
        <UserProvider>
        <Router />
        </UserProvider>
      </FuncionesProvider>
    </ThemeProvider>
  );

}

export default App
