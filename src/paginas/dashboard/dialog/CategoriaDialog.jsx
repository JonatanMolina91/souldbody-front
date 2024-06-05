import { Box, Dialog } from '@mui/material';
import React from 'react';
import TextFieldContactar from '../../../componentes/TextFieldContactar';
import BotonCustom from '../../../componentes/BotonCustom';

const CategoriaDialog = ({ openDailog, formik, setOpenDialog, row, deleter }) => {




  const handleClose = () => {
    setOpenDialog(false);
  };


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
      <input onChange={(e)=>formik.setFieldValue('imagen', e.target.files[0])} accept='image/*'   type='file'/>
      </Box>
      <Box
      padding={2}
      display={"flex"}
      justifyContent={"space-around"}>
        <BotonCustom onClick={()=>formik.isValid?setOpenDialog(false):null} type={'submit'} label="Guardar"/>
        {formik.values.id !== -1 ? <BotonCustom onClick={() => { deleter(formik.values.id); setOpenDialog(false); }} label="Eliminar" /> : null}
        <BotonCustom onClick={()=>setOpenDialog(false)} label="Volver"/>
      </Box>
      </Box>
    </Dialog>
  );
};

export default CategoriaDialog;