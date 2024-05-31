import {  Collapse, List, ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/userProvider';

const MenuDashboard = ({openMenu}) => {
  const {user} = useUser();


  function text() {
    switch(user.rol){
      case "admin":
        return [
          'clientes',
          'coaches',
          'categoria',
          'productos',
          'clases',
          'asistencias',
        ];
        break;
      case "coach":
        return [
          'asistencias',
        ];
        break;
        case "customer":
          return [
            'asistencias',
          ];
          break;
    }
  }

    return (
      <Collapse  in={openMenu} orientation='horizontal'>
      <Paper elevation={3}  >
         <List>
          <ListItem sx={{display: "flex", flexDirection: "column", }}>
            {text().map((tex)=><ListItemButton sx={{flex: 0}}><Typography to={"/dashboard/"+tex} sx={{textDecoration: "none", color:"black"}} component={Link} variant='h6'>{tex.toUpperCase()}</Typography></ListItemButton>)}
          </ListItem>
         </List>
         </Paper>
         </Collapse>
    );
};

export default MenuDashboard;