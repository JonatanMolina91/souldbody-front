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
  let enviar = new FormData();
  enviar.append('nombre', categoria.nombre);
  enviar.append('apellidos', categoria.apellidos);
  enviar.append('email', categoria.email);
  enviar.append('foto', categoria.foto);
  let datos = await axios.post(URL+'/'+id, enviar);
  return datos.data;
}

async function postCategoria(categoria) {
  let enviar = new FormData();
  enviar.append('nombre', categoria.nombre);
  enviar.append('imagen', categoria.imagen);
  enviar.append('descripcion', categoria.descripcion);
  let datos = await axios.post(URL, enviar);
  return datos.data;
}

async function deleteCategoria(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getCategorias, getProductos, putCategoria,  postCategoria, deleteCategoria};