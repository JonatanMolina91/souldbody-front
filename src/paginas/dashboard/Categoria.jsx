import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import Tabla from '../../componentes/tabla/Tabla';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import categoriaService from '../../services/categoriaServices';
import { FuncionesProvider, useFunciones } from '../../context/dialogProvider';

const Categoria = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const {getCategorias, putCategoria} = categoriaService;
  const {funciones, setFunciones} = useFunciones();
  

async function send(id, data){
  console.log(await putCategoria(id, data));
}


  useEffect(()=>{
    setFunciones({send});
    (async() => setCategorias(await getCategorias()))();
  },[])

  useEffect(()=>{
    console.log(categorias);
  },[categorias])

  return (
    <Box component={"div"}>

      <Box component={"div"}
        display="flex"
        direction={"column"}
        alignItems={"center"}
        sx={{
          zIndex: "2",
          position: "fixed",
        }}>
        <MenuDashboard openMenu={openMenu} />
        <IconButton  onClick={() => setOpenMenu(!openMenu)} 
        sx={{marginLeft:1, width: "fit-content", height: "fit-content", backgroundColor:"#001B00", color:"white", '&:hover': {backgroundColor:"#087000"}}}>
          <MenuOpenIcon />
        </IconButton>
      </Box>

      <Box
        component='div'
        display='flex'
        flexDirection='row'
        alignItems='space-between'
        justifyContent='end'
        marginTop={2}
        marginBottom={5}
        width={"100%"}>


        <Box component={"div"}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}>

          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <TextFieldContactar
              id="busquedaUsuario"
              label="Buscar Usuario"
              type={"text"}
              width={300} />
            <BotonCustom label={"Crear"} />
          </Box>
          {categorias.length>0?<Tabla rows={categorias}/>:null}
        </Box>
      </Box>
    </Box>

  );
};

export default Categoria;