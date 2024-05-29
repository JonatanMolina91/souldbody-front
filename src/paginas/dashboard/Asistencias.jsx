import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DateCustom from '../../componentes/DateCustom';
import horarioServices from '../../services/horarioServices';
import dayjs from 'dayjs';

const Asistencias = () => {


  const [openMenu, setOpenMenu] = useState(false);
  const [fecha, setFecha] = useState();
  const [horarios, setHorarios] = useState([]);
  const {showHorario} = horarioServices;


  useEffect(() => {
    (async()=>setHorarios(await showHorario("2021-10-01")))();
  }, []);

  useEffect(() => {
    console.log(horarios);
  }, [horarios]);

  async function changeFecha(e) {
    setHorarios(await showHorario(e));
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

  return (horarios.length === 0) ? <div>Cargando...</div> : (
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
              {horarios.map((horario) =><Typography variant='h4' padding={1}>{horario.inicio}</Typography>)
              }
            </Grid>

            
          </Paper>

        

          {horarios.map((horario) => {
           return horario.clases.map((clase) => {
           return (
            <Paper  sx={{marginBottom:3, width:"80%", backgroundColor:"rgba(166, 238, 161, 0.5)"}} elevation={3}>
           <Grid
              container
              direction="row"
             
            >
              <Typography margin={3} variant='h4'>{horario.inicio}</Typography>
              <Typography margin={3} variant='h4'>{clase.nombre}</Typography>
              <Typography margin={3} variant='h4'>{clase.coach}</Typography>
              <Grid
              container
              direction="row"
              alignItems="center">

               { avatar(clase.huecos, horario.clientes) }

              </Grid>
            </Grid>
            <Box 
            padding={1}>
            <BotonCustom label={"Apuntarse"} />
            </Box>
            </Paper>)
          })  
            }
          )}

        </Box>
      </Box>
    </Box>

  );
};

export default Asistencias;