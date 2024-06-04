import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'api/v1/horarios';

async function getHorario() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function putHorario(id, clase) {
  console.log(URL+'/'+id);
  let datos = await axios.put(URL+'/'+id, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function postHorario(clase) {
  let datos = await axios.post(URL, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function showHorario(fecha) {
  let datos = await axios.get(URL+'/'+fecha);
  return datos.data;
}

async function deleteHorario(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getHorario,  putHorario,  postHorario, deleteHorario, showHorario };