import React, { Component } from "react";
import getSports from "./service/SportsService";

// eslint-disable-next-line react/prefer-stateless-function
export default class SportsScreen extends Component {
  componentDidMount() {
    getSports().then((response) => {
      console.table(response);
    });
  }

  render() {
    return <div>Hello Sports</div>;
  }
}
