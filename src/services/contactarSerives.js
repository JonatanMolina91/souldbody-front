import URL_API from '../../env';
import axios from 'axios';
import '../utils/http';

const URL = URL_API() + 'api/v1/contactar';


async function postContactar(data) {
  let response = await axios.post(URL, JSON.stringify(data), {headers: {'Content-Type': 'application/json'}});
  return response.data;
}



export default {postContactar};