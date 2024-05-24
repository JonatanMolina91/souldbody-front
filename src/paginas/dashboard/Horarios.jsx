import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DateCustom from '../../componentes/DateCustom';
import horarioServices from '../../services/horarioServices';
import {  useFunciones } from '../../context/dialogProvider';
import HorarioDialog from './dialog/HorarioDialog';
import HorarioTabla from './tablas/HorarioTabla';

const Horarios = () => {


  const [openMenu, setOpenMenu] = useState(false);
  const [horarios, setHorarios] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({id:0, nombre: '', fecha: '',  inicio:'',  fin: '', huecos: 0});
  const { getHorario,  putHorario,  postHorario, deleteHorario } = horarioServices;
  const {funciones, setFunciones} = useFunciones();

  async function update(id, data){
    console.log("update");
    console.log(await putHorario(id, data));
    delete data.coach_id;
    setHorarios(horarios.map(horario => horario.id === id ? data : horario));
  }
  
  async function create(data){
    setRowDialog({id:0, nombre: '', fecha: '',  inicio:'',  fin: '', huecos: 0});
    console.log("create");
    let response = await postHorario(data);
    console.log(response.id);
    data.id = response.id;
    delete data.coach_id;
    setHorarios([...horarios, data]);
  }
  
  async function deleter(id){
    console.log("delete");
    console.log(await deleteHorario(id));
    setHorarios(horarios.filter(horario => horario.id !== id));
  }
  
  
    useEffect(()=>{
      (async() => setHorarios(await getHorario()))();
    },[])
  
    useEffect(()=>{
      console.log(horarios);
    },[horarios])

  return (
    <Box component={"div"}>
      <HorarioDialog  setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
            <DateCustom />
            <BotonCustom onClick={()=>{ setFunciones({create});setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {horarios.length>0?<HorarioTabla deleter={deleter} update={update} rows={horarios}/>:null}
        </Box>
      </Box>
    </Box>

  );
};

export default Horarios;