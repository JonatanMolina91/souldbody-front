import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'login';

async function login(clase) {
  let datos = await axios.post(URL, JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  return datos;
}

async function logout() {
  let datos = await axios.get("logout");
  document.cookie = "token=; max-age=0";
  document.cookie = "rol=; max-age=0";
  console.log(datos);
  return datos.data;
}



export default {login, logout};