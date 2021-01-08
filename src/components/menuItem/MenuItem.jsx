import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  constructor(props) {
    super();
    this.state = {
      activeItem: props.defaultActiveItem
        ? props.defaultActiveItem
        : props.menuItems[0].name,
    };
  }

  handleClick = (menuItem) => {
    this.setState({ activeItem: menuItem });
  };

  createMenu = () => {
    const { activeItem } = this.state;
    const { menuItems } = this.props;

    let ColorfulDiv = null;
    return menuItems.map((menuItem) => {
      ColorfulDiv = styled.div`
        color: white;
        background-color: ${menuItem.name === activeItem ? menuItem.color : ""};
        border-bottom: 3px solid ${menuItem.color};
      `;

      return (
        <Link to={menuItem.url}>
          <ColorfulDiv
            aria-hidden="true"
            onClick={() => this.handleClick(menuItem.name)}
            key={menuItem.name}
          >
            {menuItem.name}
          </ColorfulDiv>
        </Link>
      );
    });
  };

  render() {
    return this.createMenu();
  }
}

MenuItem.defaultProps = {
  defaultActiveItem: "",
};

MenuItem.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultActiveItem: PropTypes.string,
};
