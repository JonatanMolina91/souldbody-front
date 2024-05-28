import React from 'react';
import Home from '../../paginas/home/Home';
import Familias from '../../paginas/productos/Familias';
import Productos from '../../paginas/productos/Productos';
import Clases from '../../paginas/clases/Clases';
import Contactar from '../../paginas/contactar/Contactar';
import Login from '../../paginas/login/Login';
import { Navigate } from 'react-router-dom';

const UseInvitado = () => {
   
    return [
        { index: true, element: <Home/> },
        { path: 'productos', element: <Familias/> },
        { path: 'productos/:id', element: <Productos/> },
        { path: 'clases', element: <Clases/> },
        { path: 'contactar', element: <Contactar/> },
        { path: 'login', element: <Login/> },
        { path: '*', element: <Navigate to="/" /> }
      ];
};

export default UseInvitado;