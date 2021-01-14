import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    const { pageTitle } = this.props;
    return (
      <>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{pageTitle}</h1>
          </div>
          <Link to="/allBookmarks">All Bookmarks</Link>
        </div>
      </>
    );
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
