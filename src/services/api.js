import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    Authorization: `${localStorage.getItem(
      '@SpotiFood:type',
    )} ${localStorage.getItem('@SpotiFood:token')}`,
  },
});

export default api;
