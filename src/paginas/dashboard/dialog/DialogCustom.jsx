import { Box, Dialog, DialogTitle } from '@mui/material';
import React from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';

const DialogCustom = ({ openDailog, setOpenDialog, row }) => {


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
      <DialogTitle>Editar Usuario</DialogTitle>
      <Box
      padding={2}
      display="flex"
      flexDirection="column"
      >
        {Object.entries(row).map(([key, value]) => {
      return (<TextFieldContactar 
      id={key}
      label={key}
      value={value}
      type="text" 
      width="90%"
      />)
        })}
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom label="Guardar"/>
        <BotonCustom onClick={()=>setOpenDialog(false)} label="Volver"/>
      </Box>
    </Dialog>
  );
};

export default DialogCustom;