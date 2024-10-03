// import { convertKeysToCamelCase } from "@/ultils/stringUltil";
import axios from "axios";

// const BASE_URL = "https://api.example.com";
const BASE_URL_MOCK = "https://66fd655b6993693089550b5c.mockapi.io/isomorphic";

const axiosInstance = axios.create({
  baseURL: BASE_URL_MOCK,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // alert("Something fail");
    return Promise.reject(error);
  }
);

export default axiosInstance;
