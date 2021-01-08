import getSections from "../../service/ScreensService";

const getSports = (params) => getSections({ q: "sports", ...params });

export default getSports;
