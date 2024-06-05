import React, { createContext, useState, useContext } from 'react';
import loginServices from '../services/loginServices';


const UserContext = createContext();

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    token: '', 
    rol: '', 
    id: -1,
    nombre: '',
    apellidos: '',
    email: '',
    foto: ''
  });
  const {logout} = loginServices;

  

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setLogin(user){
    let token = getCookie('token');
    if(token !== undefined){
    setUser({
      token: token, 
      rol: getCookie('rol'), 
      id: getCookie('id'),
      nombre: getCookie('nombre'),
      apellidos: getCookie('apellidos'),
      email: getCookie('email'),
      foto: getCookie('foto')
    });}
  }

  async function setLogout(){
    await logout();
    setUser({
      token: '', 
      rol: '', 
      id: -1,
      nombre: '',
      apellidos: '',
      email: '',
      foto: ''
    });
  }

  return (
    <UserContext.Provider value={{ user, setLogin, setLogout}}>
      {children}
    </UserContext.Provider>
  )
  
}

export const useUser= () => {
    return useContext(UserContext);
  };