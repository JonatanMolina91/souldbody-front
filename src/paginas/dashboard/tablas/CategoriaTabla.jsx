import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFunciones } from '../../../context/dialogProvider';
import CategoriaDialog from '../dialog/CategoriaDialog';
import BotonCustom from '../../../componentes/BotonCustom';
import FotoDialog from '../dialog/FotoDialog';

const UsuarioTabla = ({rows, update, deleter}) => {
  
    const [openDialog, setOpenDialog] = useState(false);
    const [rowDialog, setRowDialog] = useState({});
    const {funciones, setFunciones} = useFunciones();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openFoto, setOpenFoto] = useState(false);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const CABECERA = [
      'ID',
      'Nombre',
      'Descripción',
      'Imagen',
    ]

    return (
      <Paper sx={{width: "90%", height:"100%"}} elevation={3}>
         <FotoDialog openDailog={openFoto} setOpenDailog={setOpenFoto} url={rowDialog.imagen}/>
        <TableContainer >
          <CategoriaDialog deleter={deleter} setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
                {CABECERA.map((key) => <TableCell sx={{backgroundColor: '#087000'}}   ><Typography  variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow  sx={{"&:hover":{backgroundColor:"#A6EEA1"}, cursor:"pointer"}} >
                 <TableCell onClick={()=> {setRowDialog(row); setFunciones({update}); setOpenDialog(true)}} >{row.id}</TableCell>
                 <TableCell onClick={()=> {setRowDialog(row); setFunciones({update}); setOpenDialog(true)}} >{row.nombre}</TableCell>
                 <TableCell onClick={()=> {setRowDialog(row); setFunciones({update}); setOpenDialog(true)}} >{row.descripcion}</TableCell>
                 <TableCell><BotonCustom onClick={()=>{setRowDialog(row); setOpenFoto(true)}} label={"Ver"}/></TableCell>
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

export default UsuarioTabla;