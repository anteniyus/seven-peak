import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const SportsScreen = () => (
  <Scroll url="/sport" pageTitle={MenuItems.SPORTS.name} />
);
export default SportsScreen;
