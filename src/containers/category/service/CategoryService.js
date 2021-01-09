import get from "../../../components/api/api";

const getCategory = (url, params) =>
  get(url, { "show-fields": "thumbnail", ...params });

export default getCategory;
