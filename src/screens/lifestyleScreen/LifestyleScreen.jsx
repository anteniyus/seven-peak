import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const LifestyleScreen = () => (
  <Scroll
    url={MenuItems.LIFESTYLE.url}
    pageTitle={MenuItems.LIFESTYLE.title}
    contextSectionId={MenuItems.LIFESTYLE.sectionId}
  />
);

export default LifestyleScreen;
