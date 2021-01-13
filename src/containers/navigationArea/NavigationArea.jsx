import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { IconContext } from "react-icons";
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
    };
  }

  handleMenu = () => {
    const { bar } = this.state;
    this.setState({ bar: !bar });
  };

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const { bar, searchValue } = this.state;
    return (
      <div className={styles.navigationArea}>
        <h1>The Peaks</h1>
        <div className={bar ? barClass : navigationClass}>
          <MenuItem menuItems={getMenuItems()} />
          <div
            className={styles.icon}
            onClick={this.handleMenu}
            aria-hidden="true"
          >
            <IconContext.Provider value={{ color: "blue" }}>
              <div>
                <FcMenu />
              </div>
            </IconContext.Provider>
          </div>

          <div className={styles.input}>
            <input
              type="text"
              placeholder="Search"
              onChange={(event) => this.handleInput(event)}
            />
            <div
              onClick={this.searchHandler}
              onKeyDown={this.searchHandler}
              role="button"
              tabIndex="0"
            >
              <FaSearch />
            </div>
          </div>
        </div>

        <Redirect
          to={{
            pathname: "/search",
            state: {
              q: searchValue,
            },
          }}
          push
        />
      </div>
    );
  }
}
