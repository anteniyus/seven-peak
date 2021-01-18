import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

import { getCategory } from "../../containers/category/service/CategoryService";

import { notEmptyArray } from "../../utility/Validator";
import NewsCards from "../../containers/card/NewsCards";
import Header from "../../containers/header/Header";
import Loading from "../loading/Loading";

import { OrderBy } from "../../enums/OrderBy";
import AppContext from "../../AppContext";

export default class Scroll extends Component {
  isComponentMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      page: 1,
      orderBy: "",
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;

    const { contextSectionId } = this.props;
    const { orderBy } = this.context;

    this.setState(
      {
        orderBy:
          orderBy[contextSectionId] &&
          orderBy[contextSectionId].applyFilter &&
          orderBy[contextSectionId].value
            ? orderBy[contextSectionId].value
            : OrderBy.NEWEST.value,
      },
      () => this.fetchMoreData()
    );
  }

  componentWillUnmount() {
    const { contextSectionId } = this.props;
    const { orderBy } = this.context;

    this.isComponentMounted = false;

    if (orderBy[contextSectionId])
      orderBy[contextSectionId].applyFilter = false;
    this.context.sectionId = contextSectionId;
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

  refreshByOrdering = (someOrderBy) => {
    const { contextSectionId } = this.props;
    const { orderBy } = this.context;

    orderBy[contextSectionId] = { value: someOrderBy };

    this.setState({ page: 1, items: [], orderBy: someOrderBy }, () => {
      this.fetchMoreData();
    });
  };

  render() {
    const { items, orderBy } = this.state;
    const { pageTitle } = this.props;

    return (
      <div id="123">
        {orderBy && (
          <Header
            pageTitle={pageTitle}
            refreshByOrdering={this.refreshByOrdering}
            defaultOrderBy={orderBy}
          />
        )}
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
  contextSectionId: PropTypes.string.isRequired,
};

Scroll.contextType = AppContext;
