import { Autocomplete, Box, Dialog, DialogTitle, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';
import { useFunciones } from '../../../context/dialogProvider';
import categoriaService from '../../../services/categoriaServices';

const ProductosDialog = ({ openDailog, setOpenDialog, row, deleter }) => {

  const { funciones } = useFunciones();
  const [inputValue, setInputValue] = useState('');
  const { getCategorias } = categoriaService;
  const [categoria, setCategoria] = useState();
  const [actual, setActual] = useState({ id: -1, nombre: '', imagen: '', descripcion: '', precio: 0, categoria: '' });


  const handleClose = () => {
    console.log(row);
    setOpenDialog(false);
  };

  useEffect(() => {
    (async () => {
      let categorias = await getCategorias();
      setCategoria(categorias.map(categoria => {return {id: categoria.id, label: categoria.nombre}}));
    })()
  }, [])

  useEffect(() => {
    if (row?.id)
      setActual({ ...row });
  }, [row])

  useEffect(() => {console.log(categoria)}, [categoria])



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
          id={'imagen'}
          label={'Imagen'}
          value={row?.imagen}
          onChange={(e) => actual.imagen = e.target.value}
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

        <TextFieldContactar
          id={'precio'}
          label={'Precio'}
          value={row?.precio}
          onChange={(e) => actual.precio = e.target.value}
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
          value={actual.categoria}
          onChange={(e, value) => actual.categoria = value.label}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Categoria" />}
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

export default ProductosDialog;