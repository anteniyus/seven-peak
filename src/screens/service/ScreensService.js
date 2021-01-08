import get from "../../components/api/api";

const getSections = (params) => get("/sections", params);

export default getSections;
