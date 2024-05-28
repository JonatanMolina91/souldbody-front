import React from 'react';
import Clientes from '../../paginas/dashboard/Clientes';
import Categoria from '../../paginas/dashboard/Categoria';
import Coaches from '../../paginas/dashboard/Coaches';
import ProductosEdit from '../../paginas/dashboard/Productos';
import ClasesEdit from '../../paginas/dashboard/Clases';
import Horarios from '../../paginas/dashboard/Horarios';
import Asistencias from '../../paginas/dashboard/Asistencias';
import { useUser } from '../../context/userProvider';

const UseAdmin = (user) => {
    console.log(user);
    switch(user.rol){
      case "admin":
        return  [
          { index: true, element:  <Clientes/>},
          { path: 'clientes', element: <Clientes/> },
          { path: 'categoria', element: <Categoria/> },
          { path: 'coaches', element: <Coaches/> },
          { path: 'productos', element: <ProductosEdit/> },
          { path: 'clases', element: <ClasesEdit/> },
          { path: 'horarios', element: <Horarios/> },
          { path: 'asistencias', element: <Asistencias/> },
        ];
        break;
      case "coach":
       return [
          { index: true, element:  <Asistencias/>},
          { path: 'asistencias', element: <Asistencias/> },
        ];
        break;
        case "customer":
          return [
            { index: true, element:  <Asistencias/>},
            { path: 'asistencias', element: <Asistencias/> },
          ];
          break;
    }
    
};

export default UseAdmin;