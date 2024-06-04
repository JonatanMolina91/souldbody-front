import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'api/v1/productos';

async function getProductos() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function putProducto(id, producto) {
  let enviar = new FormData();
  enviar.append('nombre', producto.nombre);
  enviar.append('imagen', producto.imagen);
  enviar.append('descripcion', producto.descripcion);
  enviar.append('precio', producto.precio);
  enviar.append('imagen', producto.imagen);
  enviar.append('category_id', producto.categoria.id);
  let datos = await axios.post(URL+'/'+id, enviar);
  return datos.data;
}

async function postProducto(producto) {
  let enviar = new FormData();
  enviar.append('nombre', producto.nombre);
  enviar.append('imagen', producto.imagen);
  enviar.append('descripcion', producto.descripcion);
  enviar.append('precio', producto.precio);
  enviar.append('imagen', producto.imagen);
  enviar.append('category_id', producto.categoria.id);
  let datos = await axios.post(URL, enviar);
  return datos.data;
}

async function deleteProducto(id) {
  let datos = await axios.delete(URL+'/'+id);
  return datos.data;
}



export default { getProductos, putProducto,  postProducto, deleteProducto };