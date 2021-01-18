import React, { Component } from "react";
import PropTypes from "prop-types";

import Scroll from "../../components/scroll/Scroll";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
    };
  }

  componentDidMount() {
    const { location } = this.props;
    this.setState({ q: location.state.q });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.state.q !== prevProps.location.state.q) {
      this.showResult(location.state.q);
    }
  }

  showResult = (q) => {
    this.setState({ q: "" }, () => {
      this.setState({ q });
    });
  };

  render() {
    const { q } = this.state;
    return (
      <div>
        {q && (
          <Scroll
            url="/search"
            params={{ q }}
            pageTitle="Search result"
            contextSectionId="search"
          />
        )}
      </div>
    );
  }
}

SearchScreen.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      q: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
