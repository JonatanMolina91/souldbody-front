import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import DialogCustom from '../DialogCustom';

const Tabla = () => {
    const rows = [
        {
            nombre: 'Juan',
            apellido: 'Perez',
        },
        {
            nombre: 'Maria',
            apellido: 'Gomez',
        },
        {
            nombre: 'Pedro',
            apellido: 'Gonzalez',
        },
    ]

    const [openDialog, setOpenDialog] = useState(false);
    return (
        <TableContainer sx={{width: "100%", height:"100%"}} component={Paper}>
          <DialogCustom openDailog={openDialog} setOpenDialog={setOpenDialog}/>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow >
                {Object.keys(rows[0]).map((key) => <TableCell sx={{backgroundColor: '#087000'}}   ><Typography  variant='h6' textAlign={"center"} color={'white'}>{key}</Typography></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow onClick={()=> setOpenDialog(true)}  sx={{"&:hover":{backgroundColor:"#A6EEA1"}, cursor:"pointer"}} >
                 {Object.entries(row).map(([key, value]) => <TableCell>{value}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default Tabla;