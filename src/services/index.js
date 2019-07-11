import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const customConfig = config;

    if (!config.headers['Content-Type']) {
      customConfig.headers['Content-Type'] = 'application/json';
    }

    return customConfig;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
