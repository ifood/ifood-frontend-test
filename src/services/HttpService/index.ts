import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

class HttpService {
  private http: AxiosStatic;

  constructor() {
    this.http = axios;
  }

  post(url: string, queryString: string, header: AxiosRequestConfig) {
    return this.http.post(url, queryString, header);
  }

  get<T>(url: string, header?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get(url, header);
  }

}

const HttpInstance = new HttpService();

export default HttpInstance as HttpService;
