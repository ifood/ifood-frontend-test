import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

class HttpService {
  private http: AxiosStatic;

  constructor() {
    this.http = axios;
  }

  post(url: string, queryString: string, header: AxiosRequestConfig) {
    return this.http.post(url, queryString, header);
  }

  get(url: string, header: AxiosRequestConfig) {
    return this.http.get(url, header);
  }

}

const HttpInstance = new HttpService();

export default HttpInstance as HttpService;
