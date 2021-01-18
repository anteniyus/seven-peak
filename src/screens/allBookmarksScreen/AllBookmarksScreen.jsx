import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import AppContext from "../../AppContext";

import { getArticle } from "../../containers/category/service/CategoryService";
import Card from "../../containers/card/Card";
import Loading from "../../components/loading/Loading";

export default class AllBookmarksScreen extends Component {
  isComponentMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      bookmarksList: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;

    const { bookmarkIdsList } = this.context;
    const bookmarksSet = new Set();

    if (bookmarkIdsList.size === 0) this.setState({ loading: false });

    bookmarkIdsList.forEach((id) => {
      getArticle("/".concat(id)).then((response) => {
        bookmarksSet.add(response.data.response.content);
        if (this.isComponentMounted)
          this.setState({
            bookmarksList: [...bookmarksSet],
            loading: false,
          });
      });
    });
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  createUI = () => {
    const { bookmarksList } = this.state;
    return bookmarksList.map((bookmark) => (
      <Card card={bookmark} key={uuidv4()} />
    ));
  };

  render() {
    const { loading } = this.state;
    return <>{loading ? <Loading /> : this.createUI()}</>;
  }
}

AllBookmarksScreen.contextType = AppContext;
