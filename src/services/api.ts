import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spotify.com',
  headers: {
    Authorization:
      'Bearer BQAzInTg7Ei0V2VK-eY_cVewb4PzgUvarQFx5pvYvc1ec3csnUk1-F7XzEEe1RgEmA9rvRp2Tv9LzFxoU0U',
  },
});

export default api;
