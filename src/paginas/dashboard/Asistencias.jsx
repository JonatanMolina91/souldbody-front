import React, { useState } from 'react';
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


  const HORARIOS = [
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30"
  ]

  async function changeFecha(e) {
    setHorarios(await showHorario(e));
  }

  const HUECOS = 10;

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
              {horarios.map((horario) =><Typography variant='h4' padding={1}>{dayjs(horario.inicio, "HH:mm:ss").format("HH:mm")}</Typography>)
              }
            </Grid>

            
          </Paper>

          {HORARIOS.map((horario) => {
           return (
            <Paper  sx={{marginBottom:3, width:"80%", backgroundColor:"rgba(166, 238, 161, 0.5)"}} elevation={3}>
           <Grid
              container
              direction="row"
             
            >
              <Typography margin={3} variant='h4'>{horario}</Typography>
              <Grid
              container
              direction="row"
              alignItems="center">
                {HORARIOS.map(() =><Avatar 
                sx={{width:100, height:100, margin:1}} 
                src="/broken-image.jpg" />)}
              </Grid>
            </Grid>
            <Box 
            padding={1}>
            <BotonCustom label={"Apuntarse"} />
            </Box>
            </Paper>)
            }
          )}

        </Box>
      </Box>
    </Box>

  );
};

export default Asistencias;