import React from "react";

const res = new Set();
const AppContext = React.createContext({
  bookmarkIdsList: res,
  orderBy: {},
  sectionId: "",
});

export default AppContext;
