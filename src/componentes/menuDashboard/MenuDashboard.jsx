import {  Collapse, List, ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuDashboard = ({openMenu}) => {

  const TEXT = [
    'clientes',
    'coaches',
    'categoria',
    'productos',
    'clases',
    'horarios',
    'asistencias',
  ]

    return (
      <Collapse  in={openMenu} orientation='horizontal'>
      <Paper elevation={3}  >
         <List>
          <ListItem sx={{display: "flex", flexDirection: "column", height: "50vh"}}>
            {TEXT.map((tex)=><ListItemButton><Typography to={"/dashboard/"+tex} sx={{textDecoration: "none", color:"black"}} component={Link} variant='h6'>{tex.toUpperCase()}</Typography></ListItemButton>)}
          </ListItem>
         </List>
         </Paper>
         </Collapse>
    );
};

export default MenuDashboard;