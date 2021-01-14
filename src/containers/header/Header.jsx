import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import AppContext from "../../AppContext";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <div className={styles.headerRight}>
            <Link to="/allBookmarks">All Bookmarks</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Header;

Header.contextType = AppContext;
