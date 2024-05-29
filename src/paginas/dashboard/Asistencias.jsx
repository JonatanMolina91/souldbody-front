import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DateCustom from '../../componentes/DateCustom';
import claseServices from '../../services/claseServices';


import dayjs from 'dayjs';
import { useUser } from '../../context/userProvider';

const Asistencias = () => {


  const [openMenu, setOpenMenu] = useState(false);
  const [fecha, setFecha] = useState();
  const [clases, setClases] = useState([]);
  const {showClase} = claseServices;
  const {user} = useUser();


  useEffect(() => {
    (async()=>setClases(await showClase("2024-05-29")))();
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
      salida.push (<Avatar 
      sx={{width:100, height:100, margin:1}} 
      src={"http://127.0.0.1:8000/"+clientes[i].foto} />);
    }
    for (let i = 0; i < (huecos-clientes.length); i++) {
      salida.push (<Avatar 
      sx={{width:100, height:100, margin:1}} 
      src="/broken-image.jpg" />);
    }

    return salida;
  }

  function apuntarse(clase) {
    let copiaUser = {...user};
    delete copiaUser.token;
    delete copiaUser.rol;
    console.log(copiaUser);
    console.log(clase);
    let apuntado = clase.clientes.some((cliente) => +copiaUser.id === cliente.user_id);
    console.log(apuntado);
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
            alignItems={"center"}>
            <DateCustom 
            value={fecha}
            id={'fecha'}
            onChange={(e) => changeFecha(e.format('YYYY-MM-DD'))}
            />
          </Box>

          <Paper 
          sx={{width:"50%", margin:5, backgroundColor:"rgba(166, 238, 161, 0.5)"}}
          elevation={3}>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            padding={1}>
              {clases.map((clase) =><Typography variant='h4' padding={1}>{clase.inicio}</Typography>)
              }
            </Grid>

            
          </Paper>

        

          {clases.map((clase) => {
           return (
            <Paper  sx={{marginBottom:3, width:"80%", backgroundColor:"rgba(166, 238, 161, 0.5)"}} elevation={3}>
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
            {user.rol==="customer"?<BotonCustom onClick={()=>apuntarse(clase)} label={"Apuntarse"} />:null}
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