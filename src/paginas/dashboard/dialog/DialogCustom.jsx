import { Box, Dialog, DialogTitle } from '@mui/material';
import React from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';

const DialogCustom = ({ openDailog, setOpenDialog, row }) => {

  const {funciones} = useFunciones();


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  function Guardar() {
    console.log(row);
    funciones.send(row.id, row);
  }

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
      onChange={(e) => row[key] = e.target.value}
      type="text" 
      width="90%"
      />)
        })}
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar"/>
        <BotonCustom onClick={()=>setOpenDialog(false)} label="Volver"/>
      </Box>
    </Dialog>
  );
};

export default DialogCustom;