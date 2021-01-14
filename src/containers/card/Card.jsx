import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import styles from "../../screens/mainScreen/MainScreen.module.css";
import categoryStyles from "../category/Category.module.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: "",
      enableRedirect: false,
    };
  }

  loadArticle = (articleId) => {
    this.setState({ articleId }, () => {
      this.setState({ enableRedirect: true });
    });
  };

  render() {
    const { card, tabIndex } = this.props;
    const { enableRedirect, articleId } = this.state;

    return (
      <>
        <div
          className={[styles["col-3"], styles["col-s-12"]].join(" ")}
          key={uuidv4()}
        >
          <div
            role="button"
            tabIndex={tabIndex}
            className={categoryStyles.container}
            onClick={() => this.loadArticle(card.id)}
            onKeyDown={() => this.loadArticle(card.id)}
          >
            <img
              src={
                card.fields && card.fields.thumbnail
                  ? card.fields.thumbnail
                  : process.env.PUBLIC_URL.concat("/thePeaks.jpg")
              }
              alt={card.webTitle}
            />
            <div className={categoryStyles.content}>
              <p>{card.webTitle}</p>
            </div>
          </div>
        </div>

        {enableRedirect && (
          <Redirect
            to={{
              pathname: "/viewArticle",
              state: {
                articleId,
              },
            }}
            push
          />
        )}
      </>
    );
  }
}

Card.defaultProps = {
  tabIndex: 0,
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fields: PropTypes.objectOf(PropTypes.string),
    webTitle: PropTypes.string.isRequired,
  }).isRequired,
  tabIndex: PropTypes.number,
};
