import URL_API from '../../env';
import axios from 'axios';
import {require} from 'form-data';

const URL = URL_API() + 'clientes';

async function getClientes() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function postCliente(data) {
  console.log(data.foto);
  let enviar = new FormData();
  enviar.append('nombre', data.nombre);
  enviar.append('apellidos', data.apellidos);
  enviar.append('email', data.email);
  enviar.append('foto', data.foto);
  let response = await axios.post(URL, enviar);
  return response.data;
}

async function putCliente(id, data) {
  console.log(data);
  let actualizar = new FormData();
  actualizar.append('nombre', data.nombre);
  actualizar.append('apellidos', data.apellidos);
  actualizar.append('email', data.email);
  actualizar.append('foto', data.foto);
  let response = await axios.post(URL+"/actualizar/"+id, actualizar);
  return response.data;
}

async function deleteCliente(id) {
  let response = await axios.delete(URL+'/'+id);
  return response.data;
}


export default { getClientes, postCliente, putCliente, deleteCliente};