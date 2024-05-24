import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import claseServices from '../../services/claseServices';
import { FuncionesProvider, useFunciones } from '../../context/dialogProvider';
import ClaseDialog from './dialog/ClaseDialog';
import ClaseTabla from './tablas/ClaseTabla';

const Productos = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [clases, setClases] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({id:0, nombre: '', descripcion: '',  video:'',  coach: ''});
  const { getClase, putClase,  postClase, deleteClase } = claseServices;
  const {funciones, setFunciones} = useFunciones();

  

async function update(id, data){
  console.log("update");
  console.log(await putClase(id, data));
  delete data.coach_id;
  setClases(clases.map(clase => clase.id === id ? data : clase));
}

async function create(data){
  setRowDialog({id:0, nombre: '', descripcion: '',  video:'',  coach: ''});
  console.log("create");
  let response = await postClase(data);
  console.log(response.id);
  data.id = response.id;
  delete data.coach_id;
  setClases([...clases, data]);
}

async function deleter(id){
  console.log("delete");
  console.log(await deleteClase(id));
  setClases(clases.filter(clase => clase.id !== id));
}


  useEffect(()=>{
    (async() => setClases(await getClase()))();
  },[])

  useEffect(()=>{
    console.log(clases);
  },[clases])

  return (
    <Box component={"div"}>
      <ClaseDialog  setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
          {clases.length>0?<ClaseTabla deleter={deleter} update={update} rows={clases}/>:null}
        </Box>
      </Box>
    </Box>

  );
};

export default Productos;