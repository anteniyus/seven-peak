import React from "react";
import Category from "../../containers/category/Category";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";

const SportsScreen = () => (
  <Category url="/sport" pageTitle={MenuItems.SPORTS.name} />
);

export default SportsScreen;
