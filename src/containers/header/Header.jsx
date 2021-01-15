import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";

import styles from "./Header.module.css";

import CustomButton from "../../components/customButton/CustomButton";

function Header(props) {
  const { pageTitle } = props;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{pageTitle}</h1>
        </div>
        <Link to="/allBookmarks">
          <CustomButton
            title="VIEW BOOKMARK"
            iconComponent={<BsFillBookmarkFill />}
          />
        </Link>
      </div>
    </>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
