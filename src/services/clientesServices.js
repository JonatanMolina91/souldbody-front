import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'clientes';

async function getClientes() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function postCliente(data) {
  let response = await axios.post(URL, JSON.stringify(data), {headers:{'Content-Type': 'application/json'}});
  return response.data;
}

async function putCliente(id, data) {
  let response = await axios.put(URL+'/'+id, JSON.stringify(data), {headers:{'Content-Type': 'application/json'}});
  return response.data;
}

async function deleteCliente(id) {
  let response = await axios.delete(URL+'/'+id);
  return response.data;
}


export default { getClientes, postCliente, putCliente, deleteCliente};