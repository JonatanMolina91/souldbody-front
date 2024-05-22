import { Box, Dialog, DialogTitle } from '@mui/material';
import React from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';

const DialogCustom = ({ openDailog, setOpenDialog, row, deleter }) => {

  const {funciones} = useFunciones();


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  function Guardar() {
    if (funciones.create !== undefined) {
      funciones.create(row);
    }

    if (funciones.update !== undefined) {
      funciones.update(row.id, row);
    }
  }

  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
      <Box
      padding={2}
      display="flex"
      flexDirection="column"
      >
        {Object.entries(row).map(([key, value]) => {
      return (key!=='id'?<TextFieldContactar 
      id={key}
      label={key}
      value={value}
      onChange={(e) => row[key] = e.target.value}
      type="text" 
      width="90%"
      />:null)
        })}
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar"/>
        {funciones.update !== undefined?<BotonCustom onClick={()=>deleter(row.id)} label="Eliminar"/>:null}
        <BotonCustom onClick={()=>setOpenDialog(false)} label="Volver"/>
      </Box>
    </Dialog>
  );
};

export default DialogCustom;