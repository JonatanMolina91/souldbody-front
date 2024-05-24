import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'horarios';



async function postHorarioClase(clase) {
  let datos = await axios.post(URL, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function deleteHorarioClase(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { postHorarioClase,  deleteHorarioClase };