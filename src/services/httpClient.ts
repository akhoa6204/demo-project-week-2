import axios from "axios";
const BASE_URL = "https://dummyjson.com";
const TIME_OUT = 25_000;
const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: TIME_OUT,
});
httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
httpClient.interceptors.request.use(
  (req) => {
    console.log("Req sent:", req.url);

    return req;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
export default httpClient;
