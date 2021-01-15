import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const CultureScreen = () => (
  <Scroll url="/culture" pageTitle={MenuItems.CULTURE.name} />
);

export default CultureScreen;
