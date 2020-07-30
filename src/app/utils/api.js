// import Url from '../config/api.config';

function getBaseUrl() {
  // const { hostname } = window.location;
  // let apiUrl;

  // switch (hostname) {
  //   case 'localhost':
  //   case 'www.localhost':
  //     apiUrl = Url.localhost;
  //     break;
  //   case 'dev.project.com':
  //     apiUrl = Url.development;
  //     break;
  //   case 'project.com':
  //     apiUrl = Url.production;
  //     break;
  //   default:
  //     apiUrl = Url.localhost;
  // }

  // return apiUrl;
  return 'http://localhost:8080/api';
}


export function handleAxiosError(err) {
  if (err.response && err.response.status === 400 && err.response.data && err.response.data.error) {
    throw new Error(err.response.data.error);
  }
  if (err.response && err.response.status === 401) {
    // throw new Error(CodeErrors.INVALID_TOKEN);
  }
  const error = {
    url: err.config && err.config.url,
    method: err.config && err.config.method,
    headers: err.config && err.config.headers,
    data: err.config && err.config.data,
    response: null,
    status: null,
    message: err.message,
  };
  if (err.response) {
    error.response = err.response.data;
    error.status = err.response.status;
  }
  return error;
}

export default {
  getBaseUrl,
};
