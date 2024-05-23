
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "../paginas/home/Home";
import Invitado from "./routes/Invitado";
import Familias from "../paginas/productos/Familias";
import Productos from "../paginas/productos/Productos";
import Clases from "../paginas/clases/Clases";
import Contactar from "../paginas/contactar/Contactar";
import Login from "../paginas/login/Login";
import Categoria from "../paginas/dashboard/Categoria";
import Clientes from "../paginas/dashboard/Clientes";
import Coaches from "../paginas/dashboard/Coaches";
import ProductosEdit from "../paginas/dashboard/Productos";

const LOGEADO = true;

const invitadoRutas = [
    { index: true, element: <Home/> },
    { path: 'productos', element: <Familias/> },
    { path: 'productos/:id', element: <Productos/> },
    { path: 'clases', element: <Clases/> },
    { path: 'contactar', element: <Contactar/> },
    { path: 'login', element: <Login/> },
    { path: '*', element: <Navigate to="/" /> }
  ];

  const logeadoRutas = [
    { index: true, element:  <Clientes/>},
    { path: 'clientes', element: <Clientes/> },
    { path: 'categoria', element: <Categoria/> },
    { path: 'coaches', element: <Coaches/> },
    { path: 'productos', element: <ProductosEdit/> },
  ];

const router = createBrowserRouter([
    { path: '/', element: <Invitado/> , children: invitadoRutas}, 
    { path: '/dashboard', element: <Invitado/> , children: LOGEADO?logeadoRutas:null},
    { path: '*', element: <Navigate to="/" /> },
  ]);
  
  const Index = () => <RouterProvider router={router} />;
  
  export default Index;