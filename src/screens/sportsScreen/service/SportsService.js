import get from "../../../components/api/api";

const gets = (params) => get("/sections", { q: "sports", ...params });

export default gets;
