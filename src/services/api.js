import axios from 'axios';

const Api = axios.create({
  // baseURL: 'https://api.wizzer.con.br/api/v1',
  baseURL: 'https://api.github.com',
});

export default Api;
