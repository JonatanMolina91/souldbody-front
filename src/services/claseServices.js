import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'api/v1/clases';

async function getClase() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function showClase(fecha) {
  let datos = await axios.get(URL+'/'+fecha);
  return datos.data;
}

async function getVista() {
  let datos = await axios.get(URL+'/vista');
  return datos.data;
}

async function putClase(id, clase) {
  console.log(URL+'/'+id);
  let datos = await axios.put(URL+'/'+id, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function postClase(clase) {
  let datos = await axios.post(URL, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function deleteClase(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}

async function postApuntarse(datos) {
  let response = await axios.post(URL_API() + 'apuntarse', JSON.stringify(datos), 
  {headers:{'Content-Type': 'application/json'}});
  return response.data;
}

async function postDesapuntarse(datos) {
  let response = await axios.post(URL_API() + 'desapuntarse', JSON.stringify(datos), 
  {headers:{'Content-Type': 'application/json'}});
  return response.data;
}



export default { getClase, putClase,  postClase, deleteClase, showClase, postApuntarse, postDesapuntarse, getVista };