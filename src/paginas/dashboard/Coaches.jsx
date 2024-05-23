import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { FuncionesProvider, useFunciones } from '../../context/dialogProvider';
import  coachService  from '../../services/coachServices';
import UsuarioDialog from './dialog/UsuarioDialog';
import UsuarioTabla from './tablas/UsuarioTabla';

const Coaches = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [coaches, setCoaches] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({id:-1, nombre: '', apellidos:'', email: '', foto: ''});
  const { getCoaches, postCoach, putCoach, deleteCoach } = coachService;
  const {funciones, setFunciones} = useFunciones();

  

async function update(id, data){
  console.log("update");
  console.log(await putCoach(id, data));
}

async function create(data){
  setRowDialog({id:-1, nombre: '', apellidos:'', email: '', foto: ''});
  console.log(data);
  let response = await postCoach(data);
  console.log(response.id);
  data.id = response.id;
  console.log(data);
  setCoaches([...coaches, data]);
}

async function deleter(id){
  console.log("delete");
  console.log(await deleteCoach(id));
  setCoaches(coaches.filter(coach => coach.id !== id));
}


  useEffect(()=>{
    (async() => setCoaches(await getCoaches()))();
  },[])

  useEffect(()=>{
    console.log(coaches);
  },[coaches])

  return (
    <Box component={"div"}>
      <UsuarioDialog setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
          {coaches.length>0?<UsuarioTabla deleter={deleter} update={update} rows={coaches}/>:null}
        </Box>
      </Box>
    </Box>

  );
};

export default Coaches;