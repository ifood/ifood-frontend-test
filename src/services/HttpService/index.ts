import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

export class HttpService {
  private http: AxiosStatic;

  constructor() {
    this.http = axios;
  }

  post(url: string, queryString: string, header: AxiosRequestConfig) {
    return this.http.post(url, queryString, header);
  }
}

const http = new HttpService();

export default http;
