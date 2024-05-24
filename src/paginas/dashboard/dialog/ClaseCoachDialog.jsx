import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';;
import BotonCustom from '../../../componentes/BotonCustom';
import horarioClaseServices from '../../../services/horarioClaseServices';

const ProductosDialog = ({ openDailog, setOpenDialog, clases, schedule_id  }) => {

const [inputValue, setInputValue] = useState('');
const [clase, setClase] = useState('');
const {postHorarioClase} = horarioClaseServices



  const handleClose = () => {
    setOpenDialog(false);
  };

   
  
  async function Guardar() {
    console.log(clase);
    let training_id = clases.find(clase => clase.label === clase).id;
    await postHorarioClase({schedule_id: 1, training_id: training_id});
  }

  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
      <Box
      height={200}
        padding={2}
        display="flex"
        flexDirection="column"
      >
        <Autocomplete
          disablePortal
          id="categoria"
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
          }} 
          options={clases}
          value={clase}
          onChange={(e, value) => setClase(value.label)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Clases" />}
        />
      </Box>
      <Box
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}>
        <BotonCustom onClick={Guardar} label="Guardar" />
        <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
      </Box>
    </Dialog>
  );
};

export default ProductosDialog;