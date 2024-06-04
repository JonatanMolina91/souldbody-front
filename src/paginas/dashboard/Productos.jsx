import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import productoServices from '../../services/productoServices';
import { FuncionesProvider, useFunciones } from '../../context/dialogProvider';
import ProductoDialog from './dialog/ProductosDialog';
import ProductoTabla from './tablas/ProductoTabla';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Productos = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [rowDialog, setRowDialog] = useState({ id: 0, nombre: '', imagen: '', descripcion: '', precio: 0, categoria: '' });
  const { getProductos, putProducto, postProducto, deleteProducto } = productoServices;
  const { funciones, setFunciones } = useFunciones();



  const formik = useFormik({
    initialValues: {
      id: -1,
      nombre: '',
      imagen: '',
      descripcion: '',
      precio: 0,
      categoria: {id: 0, nombre: ''},
    },
    onSubmit: values => {
      console.log(values);
      values.id === -1 ? create(values) : update(values.id, values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      descripcion: Yup.string().required('La descripción es obligatoria'),
      categoria: Yup.object().shape(
        {
          id: Yup.number().required('La categoria es obligatoria'), 
          nombre: Yup.string().required('La categoria es obligatoria')
        }),
    })
  });


  async function update(id, data) {
    console.log(data);
    let respuesta = await putProducto(id, data);
    let copia = { ...data };
    copia.imagen = respuesta.imagen;
    copia.categoria = data.categoria;
    let copiaProducto = productos.map(producto => producto.id === id ? copia : producto);
    setProductos(copiaProducto);
  }

  async function create(data) {
    let response = await postProducto(data);
    data.id = response.id;
    let copia = { ...data };
    copia.imagen = response.imagen;
    copia.categoria = data.categoria;
    setProductos([...productos, copia]);
  }

  async function deleter(id) {
    console.log("delete");
    console.log(await deleteProducto(id));
    setProductos(productos.filter(producto => producto.id !== id));
  }


  useEffect(() => {
    (async () => setProductos(await getProductos()))();
  }, [])

  useEffect(() => {
    setProductosFiltrados(productos);
  }, [productos])

  function filtrar(event) {
    if (event.target.value !== '') {
      setProductosFiltrados(productos.filter(producto => producto.nombre.toLowerCase().includes(event.target.value.toLowerCase()) || producto.categoria.toLowerCase().includes(event.target.value.toLowerCase())));
    } else {
      setProductosFiltrados(productos);
    }
  }

  return (
    <Box component={"div"}>
      <ProductoDialog formik={formik} row={rowDialog} openDailog={openDialog} setOpenDialog={setOpenDialog} />
      <Box component={"div"}
        display="flex"
        direction={"column"}
        alignItems={"center"}
        sx={{
          zIndex: "2",
          position: "fixed",
        }}>
        <MenuDashboard openMenu={openMenu} />
        <IconButton onClick={() => setOpenMenu(!openMenu)}
          sx={{ marginLeft: 1, width: "fit-content", height: "fit-content", backgroundColor: "#001B00", color: "white", '&:hover': { backgroundColor: "#087000" } }}>
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
              id="busquedaProducto"
              label="Buscar Producto"
              onChange={filtrar}
              type={"text"}
              width={300} />
            <BotonCustom onClick={() => {formik.resetForm(); setFunciones({ create }); setOpenDialog(true) }} label={"Crear"} />
          </Box>
          {productos.length > 0 ? <ProductoTabla formik={formik} deleter={deleter} update={update} rows={productosFiltrados} /> : null}
        </Box>
      </Box>
    </Box>

  );
};

export default Productos;