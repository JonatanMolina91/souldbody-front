import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import claseServices from '../../services/claseServices';
import ClaseDialog from './dialog/ClaseDialog';
import ClaseTabla from './tablas/ClaseTabla';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../../componentes/Loading';

const Productos = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [clases, setClases] = useState([]);
  const [clasesFiltrados, setClasesFiltrados] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { getClase, putClase,  postClase, deleteClase } = claseServices;
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      id: -1,
      fecha: null,
      inicio: null,
      fin: null,
      nombre: "",
      descripcion: "",
      video: "",
      coach: null,
      huecos: 0,
    },
    onSubmit: values => {
     values.id === -1? create(values): update(values.id, values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      descripcion: Yup.string().required('La descripción es obligatoria'),
    })
  });

async function update(id, data){
  data.video = data.video?.split("=")[1];
  await putClase(id, data);
  delete data.coach_id;
  setClases(clases.map(clase => clase.id === id ? data : clase));
}

async function create(data){
  data.video = data.video?.split("=")[1];
   let response = await postClase(data);
  data.id = response.id;
  delete data.coach_id;
  setClases([...clases, data]); 
}

async function deleter(id){
  await deleteClase(id);
  setClases(clases.filter(clase => clase.id !== id));
}


  useEffect(()=>{
    (async() => {
      setClases(await getClase());
      setLoading(false);
    })();
  },[])

  useEffect(()=>{
    setClasesFiltrados(clases);
  },[clases])

  function filtrar(event){
    if(event.target.value !== ''){
      setClasesFiltrados(clases.filter(clase => 
        clase.nombre !== null? clase.nombre.toLowerCase().includes(event.target.value.toLowerCase()):null ||
        clase.coach !== null? clase.coach.nombre.toLowerCase().includes(event.target.value.toLowerCase()): null || 
        clase.fecha !== null? clase.fecha.toLowerCase().includes(event.target.value.toLowerCase()):null
      ));
    }else{
      setClasesFiltrados(clases);
    }
  }

  return (
    <Box component={"div"}>
      <ClaseDialog  formik={formik} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
      <Box component={"div"}
        display="flex"
        direction={"column"}
        alignItems={"center"}
        sx={{
          zIndex: "2",
          position: "fixed",
        }}>
        <MenuDashboard openMenu={openMenu} />
        <IconButton  onClick={() => setOpenMenu(!openMenu)} 
        sx={{marginLeft:1, width: "fit-content", height: "fit-content", backgroundColor:"#001B00", color:"white", '&:hover': {backgroundColor:"#087000"}}}>
          <MenuOpenIcon />
        </IconButton>
      </Box>

      <Box
        component='div'
        display='flex'
        flexDirection='row'
        alignItems='space-between'
        justifyContent='end'
        marginTop={2}
        marginBottom={5}
        width={"100%"}>


        <Box component={"div"}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}>

          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <TextFieldContactar
              id="busquedaClase"
              label="Buscar Clase"
              onChange={filtrar}
              type={"text"}
              width={300} />
            <BotonCustom onClick={()=>{  formik.resetForm(); setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {!loading?<ClaseTabla formik={formik} deleter={deleter} update={update} rows={clasesFiltrados}/>:<Loading/>}
        </Box>
      </Box>
    </Box>

  );
};

export default Productos;