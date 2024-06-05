import {  Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import ClaseDialog from '../dialog/ClaseDialog';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UsuarioTabla = ({rows, formik, deleter}) => {
  
    const [openDialog, setOpenDialog] = useState(false);
    const [rowDialog, setRowDialog] = useState({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const CABECERA = [
      'ID',
      'Nombre',
      'Descripción',
      'Video',
      'Couch',
      'Fecha',
      'inicio',
      'Fin',
      'Huecos',
    ]

    function handleRow(row) {
      formik.setValues(row);
      setOpenDialog(true);
    }

    
  function RowResponsi({ row }) {

    const [open, setOpen] = useState(false);
    return (
      <React.Fragment>
        <TableRow sx={{ "&:hover": { backgroundColor: "#A6EEA1" }, cursor: "pointer", display: { xs: "table-row", sm: "table-row", md:"table-row", lg:"none" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell onClick={()=> handleRow(row)}>
            {row.nombre}
          </TableCell>
          <TableCell onClick={()=> handleRow(row)}>
            {row.coach?.nombre}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Fecha</Typography></TableCell>
                    <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Inicio</Typography></TableCell>
                    <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Fin</Typography></TableCell>
                    <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Huecos</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  <TableCell align='center'><Typography  variant='p'>{row.fecha}</Typography></TableCell>
                  <TableCell align='center'><Typography  variant='p'>{row.inicio}</Typography></TableCell>
                  <TableCell align='center'><Typography  variant='p'>{row.fin}</Typography></TableCell>
                  <TableCell align='center'><Typography  variant='p'>{row.huecos}</Typography></TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell colSpan={4} align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Video</Typography></TableCell>
                    </TableRow>
                  <TableRow>
                  <TableCell colSpan={4}  align='center'><Typography  variant='p'>{"https://www.youtube.com/watch?v="+row.video}</Typography></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }

    return (
      <Paper sx={{width: "90%", height:"100%"}} elevation={3}>
        <TableContainer >
          <ClaseDialog formik={formik} deleter={deleter} setRow={setRowDialog} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow sx={{ display: { xs: "none", lg: "table-row" } }} >
                {CABECERA.map((key, index) => <TableCell key={index} sx={{backgroundColor: '#087000'}}   ><Typography  variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
            <TableRow sx={{ display: { xs: "table-row", sm: "table-row", md:"table-row", lg:"none" } }}>
              <TableCell sx={{ backgroundColor: '#087000' }}></TableCell>
              <TableCell sx={{ backgroundColor: '#087000' }}><Typography variant='h6'  color={'white'}>{CABECERA[1]}</Typography></TableCell>
              <TableCell sx={{ backgroundColor: '#087000' }}><Typography variant='h6'  color={'white'}>{CABECERA[4]}</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <React.Fragment key={index}>
              <TableRow onClick={()=> handleRow(row)}  sx={{"&:hover":{backgroundColor:"#A6EEA1"}, cursor:"pointer", display: { xs: "none", lg: "table-row" } }} >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.descripcion}</TableCell>
                  <TableCell>{"https://www.youtube.com/watch?v="+row.video}</TableCell>
                  <TableCell>{row.coach?.nombre}</TableCell>
                  <TableCell>{row.fecha}</TableCell>
                  <TableCell>{row.inicio}</TableCell>
                  <TableCell>{row.fin}</TableCell>
                  <TableCell>{row.huecos}</TableCell>
              </TableRow>
              <RowResponsi row={row} />
              </React.Fragment>
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