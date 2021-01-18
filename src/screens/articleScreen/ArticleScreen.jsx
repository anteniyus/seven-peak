import React, { Component } from "react";
import PropTypes from "prop-types";
import { BsBookmarkPlus, BsBookmarkDash } from "react-icons/bs";
import Moment from "react-moment";
import "moment-timezone";

import { getArticle } from "../../containers/category/service/CategoryService";
import Loading from "../../components/loading/Loading";
import styles from "./ArticleScreen.module.css";
import AppContext from "../../AppContext";
import CustomButton from "../../components/customButton/CustomButton";

export default class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: "",
      isBooked: false,
    };
  }

  componentDidMount() {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", this.onBackButtonEvent);

    const { location } = this.props;
    getArticle("/".concat(location.state.articleId)).then((response) => {
      this.setState({
        content: response.data.response.content,
        loading: false,
      });
    });

    this.createBookmarkState(location.state.articleId);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.onBackButtonEvent);
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();

    // eslint-disable-next-line react/prop-types
    const { history, location } = this.props;
    const { orderBy, sectionId } = this.context;

    if (orderBy && orderBy[sectionId]) orderBy[sectionId].applyFilter = true;

    // eslint-disable-next-line react/prop-types
    history.push(location.state.prevPath);
  };

  createBookmarkState = (articleId) => {
    const { bookmarkIdsList } = this.context;

    if (bookmarkIdsList.has(articleId)) this.setState({ isBooked: true });
  };

  saveBookmark = () => {
    const { location } = this.props;
    const { articleId } = location.state;
    const { bookmarkIdsList } = this.context;
    bookmarkIdsList.add(articleId);
    this.setState({ isBooked: true });
  };

  deleteBookmark = () => {
    const { location } = this.props;
    const { articleId } = location.state;
    const { bookmarkIdsList } = this.context;

    if (bookmarkIdsList.has(articleId)) bookmarkIdsList.delete(articleId);

    this.setState({ isBooked: false });
  };

  getBookmarkButton = () => {
    let resultButton;
    const { isBooked } = this.state;
    if (isBooked)
      resultButton = (
        <CustomButton
          title="REMOVE BOOKMARK"
          onClick={this.deleteBookmark}
          iconComponent={<BsBookmarkDash />}
          bgColor="red"
        />
      );
    else
      resultButton = (
        <CustomButton
          title="ADD BOOKMARK"
          onClick={this.saveBookmark}
          iconComponent={<BsBookmarkPlus />}
        />
      );

    return resultButton;
  };

  render() {
    const { loading, content } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={["col-l-9", "col-m-9", "col-mob-12"].join(" ")}>
              {this.getBookmarkButton()}

              <Moment
                format="ddd D MMM YYYY HH:mm z"
                tz="Europe/London"
                element="p"
                style={{ fontSize: "small" }}
                utc
                local
              >
                {content.webPublicationDate}
              </Moment>

              <h1 className={styles.h1}>{content.webTitle}</h1>

              <h3>{content.fields.headline}</h3>

              <hr />

              <article
                className={styles.article}
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{ __html: content.fields.body }}
              />
            </div>

            <div className={["col-l-3", "col-m-3", "col-mob-12"].join(" ")}>
              <img
                src={
                  content.fields.thumbnail
                    ? content.fields.thumbnail
                    : process.env.PUBLIC_URL.concat("/thePeaks.jpg")
                }
                alt={content.fields.headline}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

ArticleScreen.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      articleId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

ArticleScreen.contextType = AppContext;
