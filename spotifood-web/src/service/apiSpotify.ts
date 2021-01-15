import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8888/",
});

export const apiMocky = axios.create({
  baseURL: "http://www.mocky.io/v2/5a25fade2e0000213aa90776",
});
