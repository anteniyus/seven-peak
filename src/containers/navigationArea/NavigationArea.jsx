import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link, Redirect } from "react-router-dom";
import { v4 as UKG } from "uuid";

import { FcMenu } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

import styles from "./NavigationArea.module.css";

import { getMenuItems } from "./MenuItemsConstants";
import MenuItem from "../../components/menuItem/MenuItem";

import connectWrapper from "../../redux/connect";

const barClass = [styles.navigation, styles.bar].join(" ");
const navigationClass = styles.navigation;

class NavigationArea extends Component {
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
    const { toggleActiveMenu } = this.props;

    return (
      <div className={styles.navigationArea}>
        <Link
          to="/"
          onClick={() => {
            toggleActiveMenu("/the-guardian", UKG());
          }}
        >
          <h1 className={styles.h1}>The Guardian News</h1>
        </Link>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
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

NavigationArea.propTypes = {
  toggleActiveMenu: PropTypes.func.isRequired,
};

export default connectWrapper(NavigationArea);
