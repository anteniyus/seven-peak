import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCategory } from "./service/CategoryService";
import Loading from "../../components/loading/Loading";
import NewsCards from "../card/NewsCards";

import { notEmptyArray } from "../../utility/Validator";
import styles from "./CustomCategory.module.css";
import { MenuItems } from "../navigationArea/MenuItemsConstants";

export default class CustomCategory extends Component {
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
    const { pageTitle, numOfItemsToShow, params } = this.props;
    return (
      <>
        <div className={styles.header}>
          <div className={["col-l-6", "col-mob-6"].join(" ")}>
            <div className={styles.title}>
              <h1>{pageTitle}</h1>
            </div>
          </div>

          <div className={["col-l-6", "col-mob-6", styles.right].join(" ")}>
            <Link
              to={{
                pathname: MenuItems.SPORTS.url,
                state: {
                  orderBy: params["order-by"],
                },
              }}
            >
              See All
            </Link>
          </div>
        </div>

        {notEmptyArray(categoryData) && (
          <NewsCards cardsList={categoryData.slice(0, numOfItemsToShow)} />
        )}
      </>
    );
  };

  render() {
    const { categoryData, loading } = this.state;
    return <div>{loading ? <Loading /> : this.createUI(categoryData)}</div>;
  }
}

CustomCategory.defaultProps = {
  params: {},
};

CustomCategory.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({ "order-by": PropTypes.string }),
  pageTitle: PropTypes.string.isRequired,
  numOfItemsToShow: PropTypes.number.isRequired,
};
