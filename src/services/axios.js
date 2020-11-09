import axios from "axios";
import { getAuthItems } from "../utils/auth";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  const { accessToken, tokenType } = getAuthItems();

  config.headers.Authorization = `${tokenType} ${accessToken}`;
  return config;
});

// TODO intercept and handle expired token

export default instance;
