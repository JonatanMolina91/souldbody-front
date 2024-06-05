import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import categoriaService from '../../../services/categoriaServices';

const ProductosDialog = ({ openDailog, setOpenDialog, formik, deleter }) => {

  const [inputValue, setInputValue] = useState('');
  const { getCategorias } = categoriaService;
  const [categoria, setCategoria] = useState([]);


  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    (async () => {
      setCategoria(await getCategorias());
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
            error={formik.errors.nombre}
            onChange={formik.handleChange}
            type="text"
            width="90%"
          />
          <TextFieldContactar
            id={'descripcion'}
            label={'Descripción'}
            value={formik.values.descripcion}
            error={formik.errors.descripcion}
            onChange={formik.handleChange}
            type="text"
            width="90%"
          />

          <TextFieldContactar
            id={'precio'}
            label={'Precio'}
            value={formik.values.precio}
            onChange={formik.handleChange}
            type="number"
            width="90%"
          />
          <Autocomplete
            disablePortal
            id="categoria"
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={categoria}
            value={formik.values.categoria}
            getOptionLabel={(option) => option.nombre}
            onChange={(e, value) => { formik.setFieldValue('categoria', value) }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField helperText={formik.errors.categoria} error={formik.errors.categoria ? true : false} {...params} label="Categoria" />}
          />
          <input onChange={(e) => formik.setFieldValue('imagen', e.target.files[0])} accept='image/*' type='file' />
        </Box>
        <Box
          padding={2}
          display={"flex"}
          justifyContent={"space-around"}>
          <BotonCustom type={'submit'} label="Guardar" />
          {formik.id !== -1 ? <BotonCustom onClick={() => { deleter(row.id); setOpenDialog(false); }} label="Eliminar" /> : null}
          <BotonCustom onClick={() => setOpenDialog(false)} label="Volver" />
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProductosDialog;