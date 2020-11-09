import axios from "axios";
import { getAuthItems, cleanAuthItems } from "../utils/auth";
import { history } from "App";

const instance = axios.create();

// send token when requesting
instance.interceptors.request.use(function (config) {
  const { accessToken, tokenType } = getAuthItems();

  config.headers.Authorization = `${tokenType} ${accessToken}`;
  return config;
});

// handle expired token with 401 response code
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      cleanAuthItems();
      history.push("/intro?expired=true");
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
