import axios from 'axios';

//base da url = https://api.themoviedb.org/3/

//URL DA API = movie/now_playing?api_key=12a8ab1e01e0fc409c8aa416542ac371&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
