import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'categorias';

async function getCategorias() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function getProductos(id) {
  let datos = await axios.get(URL + '/' + id);
  return datos.data;
}

async function putCategoria(id, categoria) {
  console.log(URL+'/'+id);
  let datos = await axios.put(URL+'/'+id, JSON.stringify(categoria), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function postCategoria(categoria) {
  let datos = await axios.post(URL, JSON.stringify(categoria), {headers:{'Content-Type': 'application/json'}});
  return datos.data;
}

async function deleteCategoria(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getCategorias, getProductos, putCategoria,  postCategoria, deleteCategoria};