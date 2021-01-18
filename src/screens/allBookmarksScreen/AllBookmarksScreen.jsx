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

  async componentDidMount() {
    this.isComponentMounted = true;

    const { bookmarkIdsList } = this.context;
    const loadedBookmarks = [];

    if (bookmarkIdsList.size === 0) this.setState({ loading: false });
    else {
      await this.loadBookmarks().then((results) =>
        results.forEach((result) => {
          console.log(result.data.response.content);
          loadedBookmarks.push(result.data.response.content);
        })
      );

      this.sortByDate(loadedBookmarks, OrderBy.NEWEST.value);
      if (this.isComponentMounted)
        this.setState({
          bookmarksList: [...loadedBookmarks],
          loading: false,
        });
    }
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

  sortByDate = (list, orderBy) => {
    list.sort((a, b) => {
      if (OrderBy.NEWEST.value === orderBy)
        return new Date(b.webPublicationDate) - new Date(a.webPublicationDate);

      return new Date(a.webPublicationDate) - new Date(b.webPublicationDate);
    });

    return list;
  };

  loadBookmarks = async () => {
    const { bookmarkIdsList } = this.context;

    const bookmarkIdsArray = Array.from(bookmarkIdsList);

    const results = await Promise.all(
      bookmarkIdsArray.map(async (bookmarkId) => {
        const result = await getArticle("/".concat(bookmarkId));
        return result;
      })
    );

    return results;
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header
          pageTitle="All Bookmark"
          refreshByOrdering={this.refreshByOrdering}
          showAllBookButton={false}
        />
        {loading ? <Loading /> : this.createUI()}
      </>
    );
  }
}

AllBookmarksScreen.contextType = AppContext;
