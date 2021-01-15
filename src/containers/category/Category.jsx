import React, { Component } from "react";
import PropTypes from "prop-types";

import { getCategory } from "./service/CategoryService";
import Loading from "../../components/loading/Loading";
import NewsCards from "../card/NewsCards";

import { notEmptyArray } from "../../utility/Validator";
import Header from "../header/Header";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { url, params } = this.props;
    getCategory(url, params).then((response) => {
      this.setState({
        categoryData: response.data.response.results,
        loading: false,
      });
    });
  }

  createUI = (categoryData) => {
    const { pageTitle } = this.props;
    return (
      <>
        <Header pageTitle={pageTitle} />
        {notEmptyArray(categoryData) && <NewsCards cardsList={categoryData} />}
      </>
    );
  };

  render() {
    const { categoryData, loading } = this.state;
    return <div>{loading ? <Loading /> : this.createUI(categoryData)}</div>;
  }
}

Category.defaultProps = {
  params: {},
};

Category.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
  pageTitle: PropTypes.string.isRequired,
};
