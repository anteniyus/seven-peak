import React, { Component } from "react";
import PropTypes from "prop-types";
import { getArticle } from "../../containers/category/service/CategoryService";
import Loading from "../../components/loading/Loading";
import styles from "../mainScreen/MainScreen.module.css";
import articleStyles from "./ArticleScreen.module.css";

export default class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      content: "",
    };
  }

  componentDidMount() {
    const { location } = this.props;
    getArticle("/".concat(location.state.id)).then((response) => {
      this.setState({
        content: response.data.response.content,
        loading: false,
      });
    });
  }

  render() {
    const { loading, content } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={[styles["col-9"], styles["col-s-12"]].join(" ")}>
              <p style={{ fontSize: "small" }}>{content.webPublicationDate}</p>
              <h1>{content.webTitle}</h1>
              <h3>{content.fields.headline}</h3>
              <hr />
              <article
                className={articleStyles.article}
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{ __html: content.fields.body }}
              />
            </div>
            <div className={[styles["col-3"], styles["col-s-12"]].join(" ")}>
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
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
