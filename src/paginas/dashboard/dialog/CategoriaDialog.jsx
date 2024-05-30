import { Box, Dialog, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import  {useFunciones}  from '../../../context/dialogProvider';

const CategoriaDialog = ({ openDailog, setOpenDialog, row, deleter }) => {

  const {funciones} = useFunciones();
  const [actual, setActual] = useState({id:-1, nombre: '', imagen: '', descripcion: ''});


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
    setOpenDialog(false); 
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
      id={'descripcion'}
      label={'Descripción'}
      value={row?.descripcion}
      onChange={(e) => actual.descripcion = e.target.value}
      type="text" 
      width="90%"
      />
      <input onChange={(e)=>actual.imagen=e.target.files[0]} accept='image/*'   type='file'/>
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar"/>
        {funciones.update !== undefined?<BotonCustom onClick={()=>{deleter(row.id); setOpenDialog(false);}} label="Eliminar"/>:null}
        <BotonCustom onClick={()=>setOpenDialog(false)} label="Volver"/>
      </Box>
    </Dialog>
  );
};

export default CategoriaDialog;