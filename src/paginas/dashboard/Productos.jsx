import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import Tabla from '../../componentes/tabla/Tabla';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import productoServices from '../../services/productoServices';
import { FuncionesProvider, useFunciones } from '../../context/dialogProvider';
import DialogCustom from './dialog/DialogCustom';

const Productos = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [productos, setProductos] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({id:0, nombre: '', imagen:'', descripcion: '', precio: 0, categoria: ''});
  const { getProductos, putProducto,  postProducto, deleteProducto } = productoServices;
  const {funciones, setFunciones} = useFunciones();

  

async function update(id, data){
  console.log("update");
  console.log(await putProducto(id, data));
}

async function create(data){
  setRowDialog({id:0, nombre: '', imagen:'', descripcion: '', precio: 0, categoria: ''});
  console.log("create");
  let response = await postProducto(data);
  console.log(response.id);
  data = {id: response.id, ...data };
  setProductos([...productos, data]);
}

async function deleter(id){
  console.log("delete");
  console.log(await deleteProducto(id));
  setProductos(productos.filter(producto => producto.id !== id));
}


  useEffect(()=>{
    (async() => setProductos(await getProductos()))();
  },[])

  useEffect(()=>{
    console.log(productos);
  },[productos])

  return (
    <Box component={"div"}>
      <DialogCustom  setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
            <BotonCustom onClick={()=>{ setFunciones({create});setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {productos.length>0?<Tabla deleter={deleter} update={update} rows={productos}/>:null}
        </Box>
      </Box>
    </Box>

  );
};

export default Productos;