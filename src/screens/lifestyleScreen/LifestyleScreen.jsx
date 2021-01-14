import React from "react";
import Category from "../../containers/category/Category";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";

const LifestyleScreen = () => (
  <Category url="/lifeandstyle" pageTitle={MenuItems.LIFESTYLE.name} />
);

export default LifestyleScreen;
