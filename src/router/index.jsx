
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "../paginas/home/Home";
import Invitado from "./routes/Invitado";
import Familias from "../paginas/productos/Familias";
import Productos from "../paginas/productos/Productos";
import Clases from "../paginas/clases/Clases";
import Contactar from "../paginas/contactar/Contactar";
import Login from "../paginas/login/Login";


const invitadoRutas = [
    { index: true, element: <Home/> },
    { path: 'productos', element: <Familias/> },
    { path: 'productos/:id', element: <Productos/> },
    { path: 'clases', element: <Clases/> },
    { path: 'contactar', element: <Contactar/> },
    { path: 'login', element: <Login/> },
    { path: '*', element: <Navigate to="/" /> }
  ];


const router = createBrowserRouter([
    { path: '/', element: <Invitado/> , children: invitadoRutas},
    { path: '*', element: <Navigate to="/" /> },
  ]);
  
  const Index = () => <RouterProvider router={router} />;
  
  export default Index;