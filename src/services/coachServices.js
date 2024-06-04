import URL_API from '../../env';
import axios from 'axios';
import {useUser} from '../context/userProvider';
import '../utils/http';

const URL = URL_API() + 'api/v1/coaches';



async function getCoaches() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function postCoach(data) {
  console.log(data.foto);
  let enviar = new FormData();
  enviar.append('nombre', data.nombre);
  enviar.append('apellidos', data.apellidos);
  enviar.append('email', data.email);
  enviar.append('foto', data.foto);
  let response = await axios.post(URL, enviar);
  return response.data;
}

async function putCoach(id, data) {
  console.log(data);
  let actualizar = new FormData();
  actualizar.append('nombre', data.nombre);
  actualizar.append('apellidos', data.apellidos);
  actualizar.append('email', data.email);
  actualizar.append('foto', data.foto);
  let response = await axios.post(URL+"/actualizar/"+id, actualizar);
  return response.data;
}

async function deleteCoach(id) {
  let response = await axios.delete(URL+'/'+id);
  return response.data;
}


export default { getCoaches, postCoach, putCoach, deleteCoach};