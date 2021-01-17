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
  isComponentMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      orderBy: props.params.orderBy || OrderBy.NEWEST.value,
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.fetchMoreData();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  fetchMoreData = () => {
    const { items, page, orderBy } = this.state;

    const { url, params } = this.props;
    getCategory(url, { ...params, page, "order-by": orderBy }).then(
      (response) => {
        if (this.isComponentMounted)
          this.setState({
            items: [...items, ...response.data.response.results],
            page: page + 1,
          });
      }
    );
  };

  refreshByOrdering = (orderBy) => {
    this.setState({ page: 1, items: [], orderBy }, () => {
      this.fetchMoreData();
    });
  };

  render() {
    const { items } = this.state;
    const { pageTitle, params } = this.props;

    return (
      <div id="123">
        <Header
          pageTitle={pageTitle}
          refreshByOrdering={this.refreshByOrdering}
          defaultOrderBy={params.orderBy}
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
  params: PropTypes.shape({ orderBy: PropTypes.string }),
  pageTitle: PropTypes.string.isRequired,
};
