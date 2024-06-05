import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Autocomplete, Avatar, Box, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DateCustom from '../../componentes/DateCustom';
import claseServices from '../../services/claseServices';
import clientesServices from '../../services/clientesServices';
import { useUser } from '../../context/userProvider';
import dayjs from 'dayjs';
import getURL from '../../../env';

const Asistencias = () => {


  const [openMenu, setOpenMenu] = useState(false);
  const [fecha, setFecha] = useState();
  const [clases, setClases] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [selectCliente, setSelectCliente] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const {showClase, postApuntarse, postDesapuntarse} = claseServices;
  const {getClientes} = clientesServices;
  const {user} = useUser();



  useEffect(() => {
    (async()=>{
      if(user.rol==="admin")setClientes(await getClientes());
    })();
  }, []);

  useEffect(() => {
    console.log(clases);
  }, [clases]);

  async function changeFecha(e) {
    setClases(await showClase(e));
  }



  function avatar(huecos, clientes) {
    console.log(huecos, clientes);
    let salida = [];
    if(clientes === undefined) clientes = [];
    for (let i = 0; i < clientes.length; i++) {
      console.log(clientes[i].foto);
      salida.push (<Avatar key={clientes[i].foto.id}
      sx={{width:100, height:100, margin:1}} 
      src={"http://127.0.0.1:8000/"+clientes[i].foto} />);
    }
    for (let i = 0; i < (huecos-clientes.length); i++) {
      salida.push (<Avatar key={i}
      sx={{width:100, height:100, margin:1}} 
      src="/broken-image.jpg" />);
    }

    return salida;
  }

  function apuntarse(clase) {
     let copiaUser = {...user};
    delete copiaUser.token;
    delete copiaUser.rol;
    copiaUser.user_id = copiaUser.id;
    delete copiaUser.id;
    let apuntado = clase.clientes.some((cliente) => +copiaUser.user_id === +cliente.user_id);
    if(!apuntado && clase.huecos !== clase.clientes.length) {
      clase.clientes.push(copiaUser);
      setClases(clases.map((claseMap) => claseMap.id === clase.id ? clase : claseMap));
      postApuntarse({customer_id: +copiaUser.user_id, training_id: +clase.id})
    } else {
      alert(clase.huecos === clase.clientes.length?"la clase esta llena":"ya estas apuntado");
    } 
  }

  function apuntarseAdmin(clase) {
    if(selectCliente !== null) {
     let apuntado = clase.clientes.some((cliente) => +selectCliente.user_id === +cliente.user_id);
   if(!apuntado && clase.huecos !== clase.clientes.length) {
     clase.clientes.push(selectCliente);
     setClases(clases.map((claseMap) => claseMap.id === clase.id ? clase : claseMap));
     postApuntarse({customer_id: +selectCliente.user_id, training_id: +clase.id})
   } else {
     alert(clase.huecos === clase.clientes.length?"la clase esta llena":"ya estas apuntado");
   }  
  } else {
    alert("selecciona un cliente");
  } 
 }

  async function Desapuntarse(clase) {
    let copiaUser = {...user};
    delete copiaUser.token;
    delete copiaUser.rol;
    copiaUser.user_id = copiaUser.id;
    delete copiaUser.id;
    let apuntado = clase.clientes.some((cliente) => +copiaUser.user_id === +cliente.user_id);
    if(apuntado) {
      clase.clientes = clase.clientes.filter((cliente) => +copiaUser.user_id !== +cliente.user_id);
      await postDesapuntarse({customer_id: +copiaUser.user_id, training_id: +clase.id});
      setClases(clases.map((claseMap) => claseMap.id === clase.id ? clase : claseMap));
    } else {
      alert("no estas apuntado");
    } 
  }

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
        <IconButton onClick={() => setOpenMenu(!openMenu)}
          sx={{ marginLeft: 1, width: "fit-content", height: "fit-content", backgroundColor: "#001B00", color: "white", '&:hover': { backgroundColor: "#087000" } }}>
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
            justifyContent={"center"}
            alignItems={"center"}
            marginBottom={3}>
            <DateCustom 
            value={fecha}
            id={'fecha'}
            onChange={(e) => changeFecha(e.format('YYYY-MM-DD'))}
            />
          </Box>
        

          {clases.map((clase, index) => {
           return (
            <Paper key={index}  sx={{marginBottom:3, width:"80%", backgroundColor:"rgba(166, 238, 161, 0.5)"}} elevation={3}>
           <Grid
              container
              direction="row"
             
            >
              <Typography margin={3} variant='h4'>{clase.inicio}</Typography>
              <Typography margin={3} variant='h4'>{clase.nombre}</Typography>
              <Typography margin={3} variant='h4'>{clase.coach}</Typography>
              <Grid
              container
              direction="row"
              alignItems="center">

               { avatar(clase.huecos, clase.clientes) }

              </Grid>
            </Grid>
            <Box 
            padding={1}>
            {user.rol==="customer" && !clase.clientes.some((cliente) => +user.id === +cliente.user_id) && clase.huecos !== clase.clientes.length?<BotonCustom onClick={()=>apuntarse(clase)} label={"Apuntarse"} />:null}
            {user.rol==="customer" && clase.clientes.some((cliente) => +user.id === +cliente.user_id) && clase.huecos?<BotonCustom label="Desapuntarse" onClick={() => Desapuntarse(clase)} />:null}
           {user.rol==="admin"?<Box>
              <BotonCustom onClick={()=>apuntarseAdmin(clase)} label="Apuntar"/>
              <Autocomplete
          disablePortal
          id="coach"
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={clientes}
          getOptionLabel={(option) => option.nombre}
          value={selectCliente === undefined ? null : selectCliente}
          onChange={(e, value) => setSelectCliente(value)}
          sx={{ width: 300, marginTop:1 }}
          renderInput={(params) => <TextField {...params} label="Clientes" />}
        />

            </Box>:null}
            </Box>
            </Paper>)
          })  
            }

        </Box>
      </Box>
    </Box>

  );
};

export default Asistencias;