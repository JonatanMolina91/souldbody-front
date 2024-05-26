import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';;
import BotonCustom from '../../../componentes/BotonCustom';
import TextFieldContactar from '../../../componentes/TextFieldContactar';

const ProductosDialog = ({ openDailog, setOpenDialog, clases, schedule_id, guardar  }) => {

const [inputValue, setInputValue] = useState('');
const [clase, setClase] = useState(null);
const [huecos, setHuecos] = useState(0);




  const handleClose = () => {
    setOpenDialog(false);
  };

   
  
  async function handleSave() {
    guardar({schedule_id: schedule_id, training_id: clase.id, huecos: huecos});
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
          getOptionLabel={(option) => option.nombre}
          getOptionKey={(option) => option.id}
          options={clases}
          value={clase}
          defaultValue={{ label: "Seleccione una clase", id: 0 }}
          onChange={(e, value) => setClase(value)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Clases" />}
        />
        <TextFieldContactar
        id="huecos"
        label="Huecos"
        type="number"
        value={huecos}
        onChange={(e) => setHuecos(e.target.value)}
        />
      </Box>
      <Box
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}>
        <BotonCustom onClick={handleSave} label="Guardar" />
        <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
      </Box>
    </Dialog>
  );
};

export default ProductosDialog;