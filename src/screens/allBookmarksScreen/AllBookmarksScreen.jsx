import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import AppContext from "../../AppContext";

import { getArticle } from "../../containers/category/service/CategoryService";
import Card from "../../containers/card/Card";
import Loading from "../../components/loading/Loading";
import Header from "../../containers/header/Header";
import { OrderBy } from "../../enums/OrderBy";

export default class AllBookmarksScreen extends Component {
  isComponentMounted = false;

  constructor(props) {
    super(props);

    this.headerRef = React.createRef();

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

  refreshByOrdering = (someOrderBy) => {
    const { bookmarksList } = this.state;

    bookmarksList.sort((a, b) => {
      if (OrderBy.NEWEST.value === someOrderBy)
        return new Date(b.webPublicationDate) - new Date(a.webPublicationDate);

      return new Date(a.webPublicationDate) - new Date(b.webPublicationDate);
    });

    this.setState({ bookmarksList });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header
          pageTitle="All Bookmark"
          refreshByOrdering={this.refreshByOrdering}
        />
        {loading ? <Loading /> : this.createUI()}
      </>
    );
  }
}

AllBookmarksScreen.contextType = AppContext;
