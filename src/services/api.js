import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.wizzer.con.br/api/v1',
});

export default Api;
