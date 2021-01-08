import React, { Component } from "react";
import gets from "./service/SportsService";

// eslint-disable-next-line react/prefer-stateless-function
export default class SportsScreen extends Component {
  componentDidMount() {
    gets().then((response) => {
      console.table(response);
    });
  }

  render() {
    return <div>Hello Sports</div>;
  }
}
