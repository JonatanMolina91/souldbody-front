import { Box, Dialog, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';

const UsuarioDialog = ({ openDailog, setOpenDialog, row, deleter }) => {

  const {funciones} = useFunciones();
  const [actual, setActual] = useState({id:-1, nombre: '', apellidos:'', email: '', foto: ''});


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  useEffect(()=>{
    if(row?.id)
      setActual({...row});
  },[row])

  

  function Guardar() {
    if (funciones.create !== undefined) {
      funciones.create(actual);
    }

    if (funciones.update !== undefined) {
      funciones.update(actual.id, actual);
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
      <TextFieldContactar 
      id={'nombre'}
      label={'Nombre'}
      value={row?.nombre}
      onChange={(e) => actual.nombre = e.target.value}
      type="text" 
      width="90%"
      />
      <TextFieldContactar 
      id={'apellidos'}
      label={'Apellidos'}
      value={row?.apellidos}
      onChange={(e) => actual.apellidos = e.target.value}
      type="text" 
      width="90%"
      />
      <TextFieldContactar 
      id={'email'}
      label={'Email'}
      value={row?.email}
      onChange={(e) => actual.email = e.target.value}
      type="email" 
      width="90%"
      />
      <TextFieldContactar 
      id={'foto'}
      label={'Foto'}
      value={row?.foto}
      onChange={(e) => actual.foto = e.target.value}
      type="text" 
      width="90%"
      />
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

export default UsuarioDialog;