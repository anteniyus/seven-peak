import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://content.guardianapis.com",
  timeout: 15000,
});

export default axiosInstance;
