import URL_API from '../../env';
import axios from 'axios';

const URL = URL_API() + 'coaches';

async function getCoaches() {
  let datos = await axios.get(URL);
  return datos.data;
}

async function postCoach(data) {
  let response = await axios.post(URL, JSON.stringify(data), {headers:{'Content-Type': 'application/json'}});
  return response.data;
}

async function putCoach(id, data) {
  let response = await axios.put(URL+'/'+id, JSON.stringify(data), {headers:{'Content-Type': 'application/json'}});
  return response.data;
}

async function deleteCoach(id) {
  let response = await axios.delete(URL+'/'+id);
  return response.data;
}


export default { getCoaches, postCoach, putCoach, deleteCoach};