import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import Card from "./Card";

function NewsCards(props) {
  const createUI = () => {
    const { cardsList } = props;
    return cardsList.map((card, index) => (
      <Card card={card} tabIndex={index} key={uuidv4()} />
    ));
  };

  return createUI();
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

export default NewsCards;
