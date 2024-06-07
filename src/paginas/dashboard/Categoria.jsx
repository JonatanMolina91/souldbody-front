import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import categoriaService from '../../services/categoriaServices';
import CategoriaDialog from './dialog/CategoriaDialog';
import CategoriaTabla from './tablas/CategoriaTabla';
import { useFormik } from 'formik';
import * as Yup from 'yup';     
import Loading from '../../componentes/Loading';

const Categoria = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [categoriasFiltrados, setCategoriasFiltrados] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const {getCategorias, putCategoria, postCategoria, deleteCategoria} = categoriaService;
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      id:  -1,
      nombre: '',
      imagen: '',
      descripcion:  '',
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
    let respuesta = await putCategoria(id, data);
    let copia = {...data};
    copia.imagen = respuesta.imagen;
    let copiaCategoria = categorias.map(categoria => categoria.id === id? copia: categoria);
    setCategorias(copiaCategoria);
  }
  
  async function create(data){
    let response = await postCategoria(data);
    data.id = response.id;
    let copia = {...data};
    copia.imagen = response.imagen;
    setCategorias([...categorias, copia]);
  }
  
  async function deleter(id){
    await deleteCategoria(id);
    setCategorias(categorias.filter(categoria => categoria.id !== id));
  }
  


  useEffect(()=>{
    (async() => {
      setCategorias(await getCategorias());
      setLoading(false);
    })();
  },[])

  useEffect(()=>{
    setCategoriasFiltrados(categorias);
  },[categorias])

  function filtrar(event){
    if(event.target.value !== ''){
      setCategoriasFiltrados(categorias.filter(categoria => 
        categoria.nombre!==null?categoria.nombre.toLowerCase().includes(event.target.value.toLowerCase()):null
      ));
    } else {
      setCategoriasFiltrados(categorias);
    }
  }

  return (
    <Box component={"div"}>
      <CategoriaDialog  formik={formik}  openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
              id="busquedaCategoria"
              label="Buscar Categoria"
              onChange={filtrar}
              type={"text"}
              width={300} />
            <BotonCustom onClick={()=>{formik.resetForm(); setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {!loading?<CategoriaTabla formik={formik} deleter={deleter} update={update} rows={categoriasFiltrados}/>:<Loading/>}
        </Box>
      </Box>
    </Box>

  );
};

export default Categoria;