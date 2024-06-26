import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'api/v1/';

async function login(clase) {
  let datos;
  try{
   datos = await axios.post(URL+'login', JSON.stringify(clase), {headers:{'Content-Type': 'application/json'}});
  }catch(error){
    datos = error.response;
  }
  return datos;
}

async function logout() {

  let datos = await axios.get(URL+"logout");
  document.cookie = "token=; max-age=0";
  document.cookie = "rol=; max-age=0";
  return datos.data;
}



export default {login, logout};