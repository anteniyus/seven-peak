import React, { Component } from "react";

import { FcMenu } from "react-icons/fc";

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
    };
  }

  handleMenu = () => {
    const { bar } = this.state;
    this.setState({ bar: !bar });
  };

  render() {
    const { bar } = this.state;
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
            <FcMenu />
          </div>
        </div>
      </div>
    );
  }
}
