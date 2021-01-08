import axiosInstance from "./axiosInstance";

const get = (url, params) =>
  axiosInstance.get(url, {
    params: {
      "api-key": "dfb9f114-0abd-4191-a293-e85d725ae938",
      ...params,
    },
  });

export default get;
