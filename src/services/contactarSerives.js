import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'contactar';


async function postContactar(data) {
  let response = await axios.post("http://127.0.0.1:8000/api/v1/contactar", JSON.stringify(data), {headers: {'Content-Type': 'application/json'}});
  return response.data;
}



export default {postContactar};