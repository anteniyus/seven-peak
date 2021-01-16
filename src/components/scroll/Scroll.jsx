import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { getCategory } from "../../containers/category/service/CategoryService";

import { notEmptyArray } from "../../utility/Validator";
import NewsCards from "../../containers/card/NewsCards";
import Header from "../../containers/header/Header";
import Loading from "../loading/Loading";

import { OrderBy } from "../../enums/OrderBy";

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      orderBy: OrderBy.NEWEST.value,
    };
  }

  componentDidMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    const { items, page, orderBy } = this.state;

    const { url, params } = this.props;
    getCategory(url, { ...params, page, "order-by": orderBy }).then(
      (response) => {
        this.setState({
          items: [...items, ...response.data.response.results],
          page: page + 1,
        });
      }
    );
  };

  refreshByOrdering = (order) => {
    this.setState({ page: 1, items: [], orderBy: order }, () => {
      this.fetchMoreData();
    });
  };

  render() {
    const { items } = this.state;
    const { pageTitle } = this.props;

    return (
      <div id="123">
        <Header
          pageTitle={pageTitle}
          refreshByOrdering={this.refreshByOrdering}
        />
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
