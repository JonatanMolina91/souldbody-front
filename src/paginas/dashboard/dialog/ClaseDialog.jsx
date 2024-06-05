import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import coachService from '../../../services/coachServices';
import TimeCustom from '../../../componentes/TimeCustom';
import DateCustom from '../../../componentes/DateCustom';

const CategoriaDialog = ({ openDailog, setOpenDialog, formik, deleter }) => {

 
  const [inputValue, setInputValue] = useState('');
  const { getCoaches } = coachService;
  const [coaches, setCoaches] = useState();


  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    (async () => {
      setCoaches(await getCoaches());
    })()
  }, [])

  


  return (
    <Dialog
      open={openDailog}
      onClose={handleClose}>
        <Box
      component={'form'}
      onSubmit={formik.handleSubmit}
      >
      <Box
        padding={2}
        display="flex"
        flexDirection="column"
      >
        <TextFieldContactar
          id={'nombre'}
          label={'Nombre'}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.errors.nombre}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'descripcion'}
          label={'Descripción'}
          value={formik.values.descripcion}
          onChange={formik.handleChange}
          error={formik.errors.descripcion}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'video'}
          label={'Video'}
          value={formik.values.video !== ""?"https://www.youtube.com/watch?v="+formik.values.video:null}
          onChange={formik.handleChange}
          type="text"
          width="90%"
        />

        <TextFieldContactar
          id={'huecos'}
          label={'Huecos'}
          value={formik.values.huecos}
          onChange={formik.handleChange}
          type="number"
          min={0}
          width="90%"
        />

        <DateCustom
          value={formik.values.fecha}
          width={310}
          id={'fecha'}
          onChange={(e) => formik.setFieldValue('fecha', e.format("YYYY-MM-DD"))}
        />
        <TimeCustom
        width={310}
          value={formik.values.inicio}
          id={'inicio'}
          label={'Inicio'}
          onChange={(e) => formik.setFieldValue('inicio', e.format("HH:mm"))}
        />

        <TimeCustom
        width={310}
          value={formik.values.fin}
          id={'fin'}
          label={'Fin'}
          onChange={(e) => formik.setFieldValue('fin', e.format("HH:mm"))} />
        <Autocomplete
          disablePortal
          id="coach"
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={coaches}
          getOptionLabel={(option) => option.nombre}
          value={formik.values.coach !== undefined ? formik.values.coach : null}
          onChange={(e, value) => { formik.setFieldValue('coach', value) }}
          sx={{ width: 310, marginTop: 2 }}
          renderInput={(params) => <TextField {...params} label="Coach" />}
        />
      </Box>
      <Box
        padding={2}
        display={"flex"}
        justifyContent={"space-around"}>
        <BotonCustom onClick={()=>setOpenDialog(false)} type={'submit'}label="Guardar" />
        {formik.values.id !== -1 ? <BotonCustom onClick={() => { deleter(formik.values.id); setOpenDialog(false); }} label="Eliminar" /> : null}
        <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
      </Box>
      </Box>
    </Dialog>
  );
};

export default CategoriaDialog;