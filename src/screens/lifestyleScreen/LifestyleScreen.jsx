import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const LifestyleScreen = () => (
  <Scroll url="/lifeandstyle" pageTitle={MenuItems.LIFESTYLE.name} />
);

export default LifestyleScreen;
