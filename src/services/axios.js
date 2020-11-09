import axios from "axios";
import { getAuthItems } from "../utils/auth";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  const { accessToken, tokenType } = getAuthItems();

  config.headers.Authorization = token ? `${tokenType} ${accessToken}` : "";
  return config;
});

export default instance;
