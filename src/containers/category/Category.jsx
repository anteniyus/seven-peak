import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { getCategory } from "./service/CategoryService";
import styles from "../../screens/mainScreen/MainScreen.module.css";
import categoryStyles from "./Category.module.css";
import Loading from "../../components/loading/Loading";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsData: [],
      loading: true,
      enableRedirect: false,
    };
  }

  componentDidMount() {
    const { url, params } = this.props;
    getCategory(url, params).then((response) => {
      this.setState({
        sportsData: response.data.response.results,
        loading: false,
        id: "",
      });
    });
  }

  loadArticle = (id) => {
    this.setState({ id }, () => {
      this.setState({ enableRedirect: true });
    });
  };

  createUI = (sportsData) =>
    sportsData.map((sportData, index) => (
      <div
        className={[styles["col-3"], styles["col-s-12"]].join(" ")}
        key={sportData.id}
      >
        <div
          role="button"
          tabIndex={index}
          className={categoryStyles.container}
          onClick={() => this.loadArticle(sportData.id)}
          onKeyDown={() => this.loadArticle(sportData.id)}
        >
          <img
            src={
              sportData.fields && sportData.fields.thumbnail
                ? sportData.fields.thumbnail
                : process.env.PUBLIC_URL.concat("/thePeaks.jpg")
            }
            alt={sportData.webTitle}
          />
          <div className={categoryStyles.content}>
            <p>{sportData.webTitle}</p>
          </div>
        </div>
      </div>
    ));

  render() {
    const { sportsData, loading, enableRedirect, id } = this.state;
    return (
      <div>
        {loading ? <Loading /> : this.createUI(sportsData)}

        {enableRedirect && (
          <Redirect
            to={{
              pathname: "/viewArticle",
              state: {
                id,
              },
            }}
            push
          />
        )}
      </div>
    );
  }
}

Category.defaultProps = {
  params: {},
};

Category.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
};
