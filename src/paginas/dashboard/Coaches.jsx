import React, { useEffect, useState } from 'react';
import MenuDashboard from '../../componentes/menuDashboard/MenuDashboard';
import { Box, IconButton } from '@mui/material';
import TextFieldContactar from '../../componentes/TextFieldContactar';
import BotonCustom from '../../componentes/BotonCustom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import  coachService  from '../../services/coachServices';
import UsuarioDialog from './dialog/UsuarioDialog';
import UsuarioTabla from './tablas/UsuarioTabla';
import { useUser } from '../../context/userProvider';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../../componentes/Loading';

const Coaches = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [coaches, setCoaches] = useState([]);
  const [coachesFiltrados, setCoachesFiltrados] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { getCoaches, postCoach, putCoach, deleteCoach } = coachService;
  const {user} = useUser();
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
  let respuesta = await putCoach(id, data);
  let copia = {...data};
  copia.foto = respuesta.foto;
  copia.password = '';
  copia.repeatPassword = '';
  let copiacoaches = coaches.map(coach => coach.id === id? copia: coach);
  setCoaches(copiacoaches);
  } else {
    alert("Las contraseñas no coinciden");
  }
}

async function create(data){
  if(data.password === data.repeatPassword){
  let response = await postCoach(data);
  data.id = response.id;
  let copia = {...data};
  copia.password = '';
  copia.repeatPassword = '';
  copia.foto = response.foto;
  setCoaches([...coaches, copia]);
  } else {
    alert("Las contraseñas no coinciden");
  }
}

async function deleter(id){
  await deleteCoach(id);
  setCoaches(coaches.filter(coach => coach.id !== id));
}


  useEffect(()=>{
    (async() => {
      setCoaches(await getCoaches());
      setLoading(false);
    })();
  },[])

  useEffect(()=>{
    setCoachesFiltrados(coaches);
  },[coaches])

  function filtrar(event) {
    if(event.target.value !== ''){
      setCoachesFiltrados(coaches.filter(coach => coach.nombre.toLowerCase().includes(event.target.value.toLowerCase()) || coach.apellidos.toLowerCase().includes(event.target.value.toLowerCase()) || coach.email.toLowerCase().includes(event.target.value.toLowerCase())));
  } else {
    setCoachesFiltrados(coaches);
  }
  }

  return (
    <Box component={"div"}>
      <UsuarioDialog  formik={formik} openDailog={openDialog} setOpenDialog={setOpenDialog}/>
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
              id="busquedaCoach"
              label="Buscar Coach"
              onChange={filtrar}
              type={"text"}
              width={300} />
            <BotonCustom onClick={()=>{formik.resetForm(); setOpenDialog(true)}} label={"Crear"} />
          </Box>
          {!loading?<UsuarioTabla formik={formik} deleter={deleter} update={update} rows={coachesFiltrados}/>:<Loading/>}
        </Box>
      </Box>
    </Box>

  );
};

export default Coaches;