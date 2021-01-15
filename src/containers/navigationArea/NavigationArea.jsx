import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { FcMenu } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

import styles from "./NavigationArea.module.css";

import { getMenuItems } from "./MenuItemsConstants";
import MenuItem from "../../components/menuItem/MenuItem";

const barClass = [styles.navigation, styles.bar].join(" ");
const navigationClass = styles.navigation;

export default class NavigationArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: false,
      searchValue: "",
      enableRedirect: false,
    };
  }

  handleMenu = () => {
    const { bar } = this.state;
    this.setState({ bar: !bar });
  };

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
      enableRedirect: true,
    });
  };

  render() {
    const { bar, searchValue, enableRedirect } = this.state;
    return (
      <div className={styles.navigationArea}>
        <h1>The Peaks</h1>
        <div className={bar ? barClass : navigationClass}>
          <div className={styles.menu}>
            <MenuItem menuItems={getMenuItems()} />
          </div>
          <div
            className={styles.icon}
            onClick={this.handleMenu}
            aria-hidden="true"
          >
            <div>
              <FcMenu />
            </div>
          </div>

          <div className={styles.input}>
            <form>
              <input
                type="search"
                placeholder="Search"
                onChange={(event) => this.handleInput(event)}
              />
              <div style={{ float: "left" }}>
                <FaSearch />
              </div>
            </form>
          </div>
        </div>

        {enableRedirect && (
          <Redirect
            to={{
              pathname: "/search",
              state: {
                q: searchValue,
              },
            }}
            push
          />
        )}
      </div>
    );
  }
}
