import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFunciones } from '../../../context/dialogProvider';
import HorarioDialog from '../dialog/HorarioDialog';
import dayjs from 'dayjs';

const HorarioTabla = ({rows, update, deleter}) => {
  
    const [openDialog, setOpenDialog] = useState(false);
    const [rowDialog, setRowDialog] = useState({});
    const {funciones, setFunciones} = useFunciones();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const CABECERA = [
      'ID',
      'Fecha',
      'Inicio',
      'fin',
      'Huecos'
    ]

    return (
      <Paper sx={{width: "90%", height:"100%"}} elevation={3}>
        <TableContainer >
          <HorarioDialog deleter={deleter} setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
                {CABECERA.map((key) => <TableCell sx={{backgroundColor: '#087000'}}   ><Typography  variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow onClick={()=> {setRowDialog(row); setFunciones({update}); setOpenDialog(true)}}  sx={{"&:hover":{backgroundColor:"#A6EEA1"}, cursor:"pointer"}} >
                 <TableCell>{row.id}</TableCell>
                 <TableCell>{dayjs(row.fecha).format("DD/MM/YYYY")}</TableCell>
                 <TableCell>{row.inicio}</TableCell>
                 <TableCell>{row.fin}</TableCell>
                 <TableCell>{row.huecos}</TableCell>
              </TableRow>
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