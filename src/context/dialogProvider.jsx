import React, { createContext, useState, useContext } from 'react';


const FuncionesContext = createContext();

export const FuncionesProvider = ({children}) => {

  const [funciones, setFunciones] = useState({});

  return (
    <FuncionesContext.Provider value={{funciones, setFunciones}}>
      {children}
    </FuncionesContext.Provider>
  )
  
}

export const useFunciones = () => {
    return useContext(FuncionesContext);
  };