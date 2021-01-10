import React, { Component } from "react";
import PropTypes from "prop-types";

import getCategory from "./service/CategoryService";
import styles from "../../screens/mainScreen/MainScreen.module.css";
import categoryStyles from "./Category.module.css";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsData: [],
    };
  }

  componentDidMount() {
    const { url } = this.props;
    getCategory(url).then((response) => {
      this.setState({ sportsData: response.data.response.results });
    });
  }

  render() {
    const { sportsData } = this.state;
    return (
      <>
        {sportsData.map((sportData) => (
          <div
            className={[styles["col-3"], styles["col-s-12"]].join(" ")}
            key={sportData.id}
          >
            <div className={categoryStyles.container}>
              <img
                src={
                  sportData.fields.thumbnail
                    ? sportData.fields.thumbnail
                    : process.env.PUBLIC_URL.concat("/thePeaks.jpg")
                }
                alt={sportData.webTitle}
              />
              <div className={categoryStyles.content}>
                <p>{sportData.webTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

Category.propTypes = {
  url: PropTypes.string.isRequired,
};
