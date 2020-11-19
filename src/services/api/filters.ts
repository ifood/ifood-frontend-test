import axios from 'axios';

const { REACT_APP_FILTERS_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_FILTERS_API_URL,
});

export default api;
