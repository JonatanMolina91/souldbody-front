import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'horarios';

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

async function deleteHorario(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getHorario,  putHorario,  postHorario, deleteHorario };