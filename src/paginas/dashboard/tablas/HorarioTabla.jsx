import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFunciones } from '../../../context/dialogProvider';
import HorarioDialog from '../dialog/HorarioDialog';
import dayjs from 'dayjs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BotonCustom from '../../../componentes/BotonCustom';
import ClaseCoachDialog from '../dialog/ClaseCoachDialog';
import clasesService from '../../../services/claseServices';
import horarioClaseService from '../../../services/horarioClaseServices';
import DeleteIcon from '@mui/icons-material/Delete';


const HorarioTabla = ({ rows, update, deleter }) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({});
  const { funciones, setFunciones } = useFunciones();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [clases, setClases] = useState([]);
  const { getClase } = clasesService;
  const { postHorarioClase, deleteHorarioClase } = horarioClaseService;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    (async () => {
      let clases = await getClase();
      setClases(clases);
    })()
  }, [])

  const CABECERA = [
    'Clases',
    'ID',
    'Fecha',
    'Inicio',
    'Fin',
  ]

  async function guardarHorarioClase(datos) {
    console.log(datos);
    await postHorarioClase(datos);
    let row = rows.find(row => row.id === datos.schedule_id);
    let clase = clases.find(clase => clase.id === datos.training_id);
    clase.huecos = datos.huecos;
    row.clases.push(clase);
  }

  async function eliminarHorarioClase(clase_id, horario_id) {
    console.log(clase_id, horario_id);
    console.log (await deleteHorarioClase({schedule_id: horario_id, training_id: clase_id}));
    let row = rows.find(row => row.id === horario_id);
    row.clases = row.clases.filter(clase => clase.id !== clase_id);
    }

  function RowTable(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const [openClaseCoachDialog, setOpenClaseCoachDialog] = useState(false);
    return (<React.Fragment>
      <ClaseCoachDialog guardar={guardarHorarioClase} schedule_id={row.id} clases={clases} openDailog={openClaseCoachDialog} setOpenDialog={setOpenClaseCoachDialog} />
      <TableRow sx={{ "&:hover": { backgroundColor: "#A6EEA1" }, cursor: "pointer" }} >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align='center' onClick={() => { setRowDialog(row); setFunciones({ update }); setOpenDialog(true) }}>{row.id}</TableCell>
        <TableCell align='center' onClick={() => { setRowDialog(row); setFunciones({ update }); setOpenDialog(true) }}>{dayjs(row.fecha).format("DD/MM/YYYY")}</TableCell>
        <TableCell align='center' onClick={() => { setRowDialog(row); setFunciones({ update }); setOpenDialog(true) }}>{row.inicio}</TableCell>
        <TableCell align='center' onClick={() => { setRowDialog(row); setFunciones({ update }); setOpenDialog(true) }}>{row.fin}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open}>
            <Box>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell><Typography fontWeight={'bold'} variant='h6'>Clases</Typography></TableCell>
                    <TableCell><Typography fontWeight={'bold'} variant='h6'>Coaches</Typography></TableCell>
                    <TableCell><Typography fontWeight={'bold'} variant='h6'>Huecos</Typography></TableCell>
                    <TableCell><BotonCustom onClick={() => setOpenClaseCoachDialog(true)} label="+"></BotonCustom></TableCell>
                  </TableRow>
                </TableHead>
                {
                  row.clases.map((clase, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{clase.nombre}</TableCell>
                        <TableCell>{clase.coach}</TableCell>
                        <TableCell>{clase.huecos}</TableCell>
                        <TableCell><IconButton onClick={()=>{eliminarHorarioClase(clase.id, row.id); setOpen(false)}} aria-label="delete"  sx={{color: '#001B00'}}>
                          <DeleteIcon />
                        </IconButton></TableCell>
                      </TableRow>
                    )
                  })
                }
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>);
  }

  return (
    <Paper sx={{ width: "90%", height: "100%" }} elevation={3}>
      <TableContainer >
        <HorarioDialog deleter={deleter} setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog} />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow >
              {CABECERA.map((key) => <TableCell sx={{ backgroundColor: '#087000' }}   ><Typography variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <RowTable row={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default HorarioTabla;