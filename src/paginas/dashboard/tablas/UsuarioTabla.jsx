import { Box, Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UsuarioDialog from '../dialog/UsuarioDialog';
import BotonCustom from '../../../componentes/BotonCustom';
import FotoDialog from '../dialog/FotoDialog';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const UsuarioTabla = ({ rows, deleter, formik }) => {

  const [openDialog, setOpenDialog] = useState(false);
  const [openFoto, setOpenFoto] = useState(false);
  const [rowDialog, setRowDialog] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const CABECERA = [
    'ID',
    'Nombre',
    'Apellidos',
    'Email',
    'Foto'
  ]

  function handleRow(row) {
    formik.setValues(row);
    setOpenDialog(true);
  }

  function RowResponsi({ row }) {

    const [open, setOpen] = useState(false);
    return (
      <React.Fragment>
        <TableRow sx={{ "&:hover": { backgroundColor: "#A6EEA1" }, cursor: "pointer", display: { xs: "table-row", sm: "table-row", md:"none" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell>
            {row.nombre}
          </TableCell>
          <TableCell>
            {row.apellidos}
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'   color={'#087000'}>Email</Typography></TableCell>
                    <TableCell align='center'><Typography  variant='p'>{row.email}</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                  <TableCell align='center' ><Typography fontWeight={"bold"} variant='p'  color={'#087000'}>Foto</Typography></TableCell>
                    <TableCell align='center'><BotonCustom onClick={() => { setRowDialog(row); setOpenFoto(true) }} label={"Ver"} /></TableCell>
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
    <Paper sx={{ width: "90%", height: "100%" }} elevation={3}>
      <TableContainer >
        <UsuarioDialog deleter={deleter} formik={formik} openDailog={openDialog} setOpenDialog={setOpenDialog} />
        <FotoDialog openDailog={openFoto} setOpenDailog={setOpenFoto} url={rowDialog.foto} />
        <Table aria-label="simple table">
          <TableHead >
            <TableRow sx={{ display: { xs: "none", md: "table-row" } }}>
              {CABECERA.map((key, index) => <TableCell key={index} sx={{ backgroundColor: '#087000' }}   ><Typography variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
            <TableRow sx={{ display: { xs: "table-row", sm: "table-row", md:"none" } }}>
              <TableCell sx={{ backgroundColor: '#087000' }}></TableCell>
              <TableCell sx={{ backgroundColor: '#087000' }}><Typography variant='h6'  color={'white'}>{CABECERA[1]}</Typography></TableCell>
              <TableCell sx={{ backgroundColor: '#087000' }}><Typography variant='h6'  color={'white'}>{CABECERA[2]}</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <React.Fragment key={index}>
                <TableRow sx={{ "&:hover": { backgroundColor: "#A6EEA1" }, cursor: "pointer", display: { xs: "none", md: "table-row" } }} >
                  <TableCell onClick={() => handleRow(row)}>{row.id}</TableCell>
                  <TableCell onClick={() => handleRow(row)}>{row.nombre}</TableCell>
                  <TableCell onClick={() => handleRow(row)}>{row.apellidos}</TableCell>
                  <TableCell onClick={() => handleRow(row)}>{row.email}</TableCell>
                  <TableCell><BotonCustom onClick={() => { setRowDialog(row); setOpenFoto(true) }} label={"Ver"} /></TableCell>
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