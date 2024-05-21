import { Box, Dialog, DialogTitle } from '@mui/material';
import React from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';

const CategoriaDialog = ({ openDailog, setOpenDialog }) => {

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
      <DialogTitle>Editar Categoria</DialogTitle>
      <Box
      padding={2}
      display="flex"
      flexDirection="column"
      >
      <TextFieldContactar 
      id="nombre"
      label="Nombre"
      type="text" 
      width="90%"
      />
      <TextFieldContactar 
      id="apellido"
      label="apellido"
      type="text" 
      width="90%"
      />
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom label="Guardar"/>
        <BotonCustom label="Volver"/>
      </Box>
    </Dialog>
  );
};

export default CategoriaDialog;