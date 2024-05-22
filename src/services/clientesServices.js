import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'clientes';

async function getClientes() {
  let datos = await axios.get(URL);
  return datos.data;
}


export default { getClientes };