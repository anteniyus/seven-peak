import React, { Component } from "react";
import PropTypes from "prop-types";

import getCategory from "./service/CategoryService";
import styles from "../../screens/mainScreen/MainScreen.module.css";

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
            <div className={styles.aside}>
              <img src={sportData.fields.thumbnail} alt={sportData.webTitle} />
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
