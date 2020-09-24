import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com',
  headers: {
    Authorization:
      'Bearer BQDT80JBGXsllriltEAPzhwv253AlAHFk23G7TeMK0RP-A3wHXR3wSRifNseFeoC0XGuJjVhOd5IFU3J6Lo',
  },
});

export default api;
