import React, { Component } from "react";

import styles from "./Header.module.css";
import AppContext from "../../AppContext";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  showBookmarks = () => {
    console.log(this.context);
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerRight}>
          <button type="button" onClick={this.showBookmarks}>
            All Bookmarks
          </button>
        </div>
      </div>
    );
  }
}

export default Header;

Header.contextType = AppContext;
