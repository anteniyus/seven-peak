import React, { Component } from "react";

import Category from "../../containers/category/Category";

// eslint-disable-next-line react/prefer-stateless-function
export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
    };
  }

  showResult = (q) => {
    this.setState({ q: "" }, () => {
      this.setState({ q });
    });
  };

  render() {
    const { q } = this.state;
    return <div>{q && <Category url="/search" params={{ q }} />}</div>;
  }
}
