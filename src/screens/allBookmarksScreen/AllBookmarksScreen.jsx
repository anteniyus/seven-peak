import React, { Component } from "react";

import { uuid as u4 } from "uuidv4";

import AppContext from "../../AppContext";

import { getArticle } from "../../containers/category/service/CategoryService";
import Card from "../../containers/card/Card";

// eslint-disable-next-line react/prefer-stateless-function
export default class AllBookmarksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarksList: [],
    };
  }

  componentDidMount() {
    const { bookmarkIdsList } = this.context;
    const bookmarksSet = new Set();

    bookmarkIdsList.forEach((id) => {
      getArticle("/".concat(id)).then((response) => {
        bookmarksSet.add(response.data.response.content);
        this.setState({
          bookmarksList: [...bookmarksSet],
        });
      });
    });
  }

  render() {
    const { bookmarksList } = this.state;
    return bookmarksList.map((bookmark) => <Card card={bookmark} key={u4()} />);
  }
}

AllBookmarksScreen.contextType = AppContext;