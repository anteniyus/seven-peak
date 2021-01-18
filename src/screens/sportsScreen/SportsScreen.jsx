import React, { useContext } from "react";
import PropTypes from "prop-types";

import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";
import AppContext from "../../AppContext";

const SportsScreen = (props) => {
  const { location } = props;

  const appContext = useContext(AppContext);

  if (location.state && location.state.orderBy) {
    appContext.orderBy[MenuItems.SPORTS.sectionId] = {
      applyFilter: true,
      value: location.state.orderBy,
    };
  }

  return (
    <Scroll
      url={MenuItems.SPORTS.url}
      pageTitle={MenuItems.SPORTS.title}
      contextSectionId={MenuItems.SPORTS.sectionId}
    />
  );
};

SportsScreen.defaultProps = {
  location: { state: {} },
};

SportsScreen.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      orderBy: PropTypes.string,
    }),
  }),
};

export default SportsScreen;
