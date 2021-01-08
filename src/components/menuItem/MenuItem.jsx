import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

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

    let Title = null;
    return menuItems.map((menuItem) => {
      Title = styled.div`
        color: white;
        background-color: ${menuItem.name === activeItem ? menuItem.color : ""};
      `;

      return (
        <Title
          aria-hidden="true"
          onClick={() => this.handleClick(menuItem.name)}
          key={menuItem.name}
        >
          {menuItem.name}
        </Title>
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
