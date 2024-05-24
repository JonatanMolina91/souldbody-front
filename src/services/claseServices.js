import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'clases';

async function getClase() {
  let datos = await axios.get(URL);
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



export default { getClase, putClase,  postClase, deleteClase };