
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Invitado from "./routes/Invitado";
import UseInvitado from "./routes/useInvitado";
import UseLogin from "./routes/useLogin";
import { useEffect } from "react";
import { useUser } from "../context/userProvider";




  
  const Index = () => {
    const {user, setLogin} = useUser();
    useEffect(() => {
      setLogin();
    }, []);
    
    let router = createBrowserRouter([
      { path: '/', element: <Invitado/> , children: UseInvitado()}, 
      { path: '/dashboard', element: <Invitado/>,  children: UseLogin(user)},
      { path: '*', element: <Navigate to="/" /> },
    ]);
    
  return <RouterProvider router={router}/>};
  
  export default Index;