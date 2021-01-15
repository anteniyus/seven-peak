import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { getCategory } from "../../containers/category/service/CategoryService";

import { notEmptyArray } from "../../utility/Validator";
import NewsCards from "../../containers/card/NewsCards";
import Header from "../../containers/header/Header";
import Loading from "../loading/Loading";

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    const { items, page } = this.state;

    const { url, params } = this.props;
    getCategory(url, { ...params, page }).then((response) => {
      this.setState({
        items: [...items, ...response.data.response.results],
        page: page + 1,
      });
    });
  };

  render() {
    const { items } = this.state;
    const { pageTitle } = this.props;

    return (
      <div id="123">
        <Header pageTitle={pageTitle} />
        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore="true"
          loader={<Loading />}
        >
          {notEmptyArray(items) ? (
            <div id="scrollableDiv">
              <NewsCards cardsList={items} />
            </div>
          ) : (
            ""
          )}
        </InfiniteScroll>
      </div>
    );
  }
}

Scroll.defaultProps = {
  params: {},
};

Scroll.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
  pageTitle: PropTypes.string.isRequired,
};
