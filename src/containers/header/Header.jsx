import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header(props) {
  const { pageTitle } = props;

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

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
