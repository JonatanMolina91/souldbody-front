import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'horarioClase';



async function postHorarioClase(clase) {
  let datos = await axios.post(URL, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function deleteHorarioClase(clase) {
  console.log(JSON.stringify(clase));
  let datos = await axios(
    {
      method: 'DELETE',
      url: URL,
      data: JSON.stringify(clase),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  return datos.data;
}



export default { postHorarioClase,  deleteHorarioClase };