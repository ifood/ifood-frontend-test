import axios from "axios";
import ls from "local-storage";

import { history } from "store";
import { BASE_URL } from "utils/constants/endpoints";
import urls from "utils/constants/urls";

const API = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const isAuthenticated = () => {
  const token = ls.get("@APP/authToken");
  const expiresIn = ls.get("@APP/expires_in");

  if (token) {
    const dateExp = new Date().getTime() + expiresIn;
    const dateNow = new Date().getTime();

    if (dateExp > dateNow) {
      return true;
    }

    ls.clear();
  }
  return false;
};

API.interceptors.request.use(
  async (request) => {
    request.headers.common["Content-Type"] = "application/json";

    if (ls.get("@APP/authToken")) {
      const accessToken = `Bearer ${ls.get("@APP/authToken")}`;
      request.headers.common.Authorization = accessToken;
    }

    return request;
  },

  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      ls.clear();
      history.push(urls.ROUTES.app.path);
    }

    return Promise.reject(error);
  }
);

export { API, isAuthenticated };
