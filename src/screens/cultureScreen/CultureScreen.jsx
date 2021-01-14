import React from "react";
import Category from "../../containers/category/Category";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";

const CultureScreen = () => (
  <Category url="/culture" pageTitle={MenuItems.CULTURE.name} />
);

export default CultureScreen;
