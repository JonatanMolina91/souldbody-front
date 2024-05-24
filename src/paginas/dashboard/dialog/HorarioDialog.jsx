import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';
import DateCustom from '../../../componentes/DateCustom';
import TimeCustom from '../../../componentes/TimeCustom';


const HorarioDialog = ({ openDailog, setOpenDialog, row, deleter }) => {

  const { funciones } = useFunciones();
  const [inputValue, setInputValue] = useState('');
  const [actual, setActual] = useState({ id: -1, fecha:'', inicio: '', fin: '', huecos: 0});


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  

  useEffect(() => {
    if (row?.id)
      setActual({ ...row });
  }, [row])




  function Guardar() {
    console.log(actual);
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
        <DateCustom
         value={row?.fecha}
         id={'fecha'} 
         onChange={(e) => actual.fecha = e.format("YYYY-MM-DD")}
        />

       <TimeCustom 
       value={row?.inicio} 
       id={'inicio'} 
       label={'Inicio'}
       onChange={(e) => actual.inicio = e.format("HH:mm")}
       />

       <TimeCustom
        value={row?.fin} 
        id={'fin'} 
        label={'Fin'}
        onChange={(e) => actual.inicio = e.format("HH:mm")}/>

       <TextFieldContactar
          id={'huecos'}
          label={'Huecos'}
          value={row?.huecos}
          onChange={(e) => actual.huecos = e.target.value}
          type="number"
          width="90%"
        />
      
      </Box>
      <Box
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar" />
        {funciones.update !== undefined ? <BotonCustom onClick={() => deleter(row.id)} label="Eliminar" /> : null}
        <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
      </Box>
    </Dialog>
  );
};

export default HorarioDialog;