import React from "react";
import PropTypes from "prop-types";

import { MenuItems } from "../../containers/navigationArea/MenuItemsConstants";
import Scroll from "../../components/scroll/Scroll";

const SportsScreen = (props) => {
  const { location } = props;
  const orderBy =
    location.state && location.state.orderBy ? location.state.orderBy : "";

  return (
    <Scroll
      url="/sport"
      pageTitle={MenuItems.SPORTS.name}
      params={{ orderBy }}
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
