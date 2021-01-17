import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { Link, withRouter } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import connectWrapper from "../../redux/connect";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.activeMenu,
    };
  }

  componentDidMount() {
    const { defaultActiveItem, location } = this.props;
    this.setState({
      activeItem: defaultActiveItem || location.pathname,
    });
  }

  componentDidUpdate(prevProps) {
    const { activeMenu } = this.props;

    if (activeMenu.hash !== prevProps.activeMenu.hash) {
      this.setActiveMenu(activeMenu.activeItem);
    }
  }

  setActiveMenu = (activeItem) => {
    this.setState({ activeItem });
  };

  handleClick = (menuItem) => {
    this.setState({ activeItem: menuItem });
  };

  createMenu = () => {
    const { activeItem } = this.state;
    const { menuItems } = this.props;

    let ColorfulDiv = null;
    return menuItems.map((menuItem) => {
      ColorfulDiv = styled.div`
        color: ${() => (menuItem.url === activeItem ? "black" : "white")};
        background-color: ${() =>
          menuItem.url === activeItem ? menuItem.color : ""};
        border-bottom: 3px solid ${() => menuItem.color};
      `;

      return (
        <div key={uuidv4()}>
          <Link to={menuItem.url}>
            <ColorfulDiv
              aria-hidden="true"
              onClick={() => this.handleClick(menuItem.url)}
            >
              {menuItem.name}
            </ColorfulDiv>
          </Link>
        </div>
      );
    });
  };

  render() {
    const { activeItem } = this.state;
    return <>{activeItem && this.createMenu()}</>;
  }
}

MenuItem.defaultProps = {
  defaultActiveItem: "",
  activeMenu: { activeItem: "", hash: "" },
};

MenuItem.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultActiveItem: PropTypes.string,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
  activeMenu: PropTypes.shape({
    activeItem: PropTypes.string,
    hash: PropTypes.string,
  }),
};

export default connectWrapper(withRouter(MenuItem));
