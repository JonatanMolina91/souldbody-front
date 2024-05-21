import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'productos';

async function getCategorias() {
 console.log(URL);
  let datos = await axios.get(URL);
  return datos.data;
}

async function getProductos(id) {
    console.log(URL);
     let datos = await axios.get(URL+'/'+id);
     return datos.data;
   }

export default{getCategorias, getProductos};