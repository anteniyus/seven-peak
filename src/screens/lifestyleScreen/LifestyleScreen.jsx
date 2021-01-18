import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const LifestyleScreen = () => (
  <Scroll
    url="/lifeandstyle"
    pageTitle={MenuItems.LIFESTYLE.name}
    contextSectionId={MenuItems.LIFESTYLE.sectionId}
  />
);

export default LifestyleScreen;
