import Axios from 'axios';

function getInstance() {
  const axiosInstance = Axios.create({
    baseURL: 'https://google.com.br/',
    timeout: 35000,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  return axiosInstance;
}

export default getInstance;
