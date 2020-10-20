import axios from 'axios';

const api = axios.create({});

api.interceptors.response.use(
  (config) => config,
  async (err) => {
    if (err.response.status !== 500) {
      const { data } =
        (await api.post(
          'https://accounts.spotify.com/api/token',
          'grant_type=client_credentials',
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(
                `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
              )}`,
            },
          }
        )) || {};
      const { config } = err;
      config.headers.Authorization = `Bearer ${data.access_token}`;
      return axios(config);
    }
    return Promise.reject(err);
  }
);
export default api;
