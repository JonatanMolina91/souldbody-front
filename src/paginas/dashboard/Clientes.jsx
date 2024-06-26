import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import  clientesServices  from '../../services/clientesServices';
import UsuarioDialog from './dialog/UsuarioDialog';
import UsuarioTabla from './tablas/UsuarioTabla';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../../componentes/Loading';


const Clientes = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { getClientes, postCliente, putCliente, deleteCliente} = clientesServices;
  const [loading, setLoading] = useState(true);


  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      id:  -1,
      nombre: '',
      apellidos:  '',
      email: '',
      password: '',
      repeatPassword:  '',
    },
    onSubmit: values => {
     values.id === -1? create(values): update(values.id, values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
    })
  });



  

  

async function update(id, data){
  if(data.password === data.repeatPassword){
  let respuesta = await putCliente(id, data);
  let copia = {...data};
  copia.foto = respuesta.foto;
  copia.password = '';
  copia.repeatPassword = '';
  let copiaclientes = clientes.map(cliente => cliente.id === id? copia: cliente);
  setClientes(copiaclientes);
  } else {
    alert("Las contraseñas no coinciden");
  }
}

async function create(data){
  if(data.password === data.repeatPassword){
  let response = await postCliente(data);
  data.id = response.id;
  let copia = {...data};
  copia.foto = response.foto;
  copia.password = '';
  copia.repeatPassword = '';
  setClientes([...clientes, copia]);
  }else {
    alert("Las contraseñas no coinciden");
  }
}

async function deleter(id){
  await deleteCliente(id);
  setClientes(clientes.filter(cliente => cliente.id !== id));
}

function filtrar(event) {
  if(event.target.value !== ''){
    setClientesFiltrados(clientes.filter(cliente => 
      cliente.nombre !== null? cliente.nombre.toLowerCase().includes(event.target.value.toLowerCase()):null || 
      cliente.apellidos !== null?cliente.apellidos.toLowerCase().includes(event.target.value.toLowerCase()):null || 
      cliente.email !== null?cliente.email.toLowerCase().includes(event.target.value.toLowerCase()):null
    ));
} else {
  setClientesFiltrados(clientes);
}
}



  useEffect(()=>{
    (async() => {
      setClientes(await getClientes());
      setLoading(false);
    })();
  },[])

  useEffect(()=>{
    setClientesFiltrados(clientes);
  },[clientes])

  return (
    <Box component={"div"}>
      <UsuarioDialog   formik={formik} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
              id="busquedaUsuario"
              label="Buscar Usuario"
              type={"text"}
              width={300} 
              onChange={filtrar} />
            <BotonCustom onClick={()=>{  formik.resetForm();setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {!loading?<UsuarioTabla formik={formik} deleter={deleter} update={update} rows={clientesFiltrados}/>:<Loading/>}
        </Box>
      </Box>
    </Box>

  );
};

export default Clientes;