import React, { Component } from "react";
import PropTypes from "prop-types";

import { IconContext } from "react-icons";
import { FcEnteringHeavenAlive } from "react-icons/fc";

import getCategory from "./service/CategoryService";
import styles from "../../screens/mainScreen/MainScreen.module.css";
import categoryStyles from "./Category.module.css";
import Loading from "../../components/loading/Loading";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsData: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    getCategory(url).then((response) => {
      this.setState({
        sportsData: response.data.response.results,
        loading: false,
      });
    });
  }

  createUI = (sportsData) =>
    sportsData.map((sportData) => (
      <div
        className={[styles["col-3"], styles["col-s-12"]].join(" ")}
        key={sportData.id}
      >
        <div className={categoryStyles.container}>
          <img
            src={
              sportData.fields.thumbnail
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

  // eslint-disable-next-line class-methods-use-this
  BlueLargeIcon() {
    return (
      <IconContext.Provider value={{ color: "blue" }}>
        <div>
          <FcEnteringHeavenAlive size="10em" />
        </div>
      </IconContext.Provider>
    );
  }

  render() {
    const { sportsData, loading } = this.state;
    return <div>{loading ? <Loading /> : this.createUI(sportsData)}</div>;
  }
}

Category.propTypes = {
  url: PropTypes.string.isRequired,
};
