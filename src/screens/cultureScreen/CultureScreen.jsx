import React from "react";
import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const CultureScreen = () => (
  <Scroll
    url={MenuItems.CULTURE.url}
    pageTitle={MenuItems.CULTURE.title}
    contextSectionId={MenuItems.CULTURE.sectionId}
  />
);

export default CultureScreen;
