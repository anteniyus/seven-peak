import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./Card";
import GRN from "../../utility/GeneralUtility";

export default class NewsCards extends Component {
  createUI = () => {
    const { cardsList } = this.props;
    return cardsList.map((card, index) => (
      <Card card={card} tabIndex={index} key={card.id + GRN} />
    ));
  };

  render() {
    return <>{this.createUI()}</>;
  }
}

NewsCards.propTypes = {
  cardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      fields: PropTypes.objectOf(PropTypes.string),
      webTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
