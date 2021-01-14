import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import styles from "./Header.module.css";
import AppContext from "../../AppContext";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableRedirect: false,
    };
  }

  componentDidMount() {
    console.log("mount");
  }

  showBookmarks = () => {
    console.log(this.context);
    this.setState({ enableRedirect: true });
  };

  render() {
    const { enableRedirect } = this.state;
    return (
      <>
        <div className={styles.header}>
          <div className={styles.headerRight}>
            <button type="button" onClick={this.showBookmarks}>
              All Bookmarks
            </button>
          </div>
        </div>
        {enableRedirect && (
          <Redirect
            to={{
              pathname: "/allBookmarks",
            }}
            push
          />
        )}
      </>
    );
  }
}

export default Header;

Header.contextType = AppContext;
