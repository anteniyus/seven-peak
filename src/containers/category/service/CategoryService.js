import get from "../../../components/api/api";

const getCategory = (url, params) =>
  get(url, { "show-fields": "thumbnail", ...params });

const getArticle = (url, params) =>
  get(url, { "show-blocks": "all", "show-fields": "all", ...params });

export { getCategory, getArticle };
