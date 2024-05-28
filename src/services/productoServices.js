import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'productos';

async function getProductos() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function putProducto(id, producto) {
  console.log(URL+'/'+id);
  let datos = await axios.put(URL+'/'+id, JSON.stringify(producto), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function postProducto(producto) {
  let datos = await axios.post(URL, JSON.stringify(producto), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function deleteProducto(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getProductos, putProducto,  postProducto, deleteProducto };