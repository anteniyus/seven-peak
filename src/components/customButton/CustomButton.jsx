import React from "react";
import PropTypes from "prop-types";

import { BsBookmarkPlus } from "react-icons/bs";
import styles from "./CustomButton.module.css";

function CustomButton(props) {
  const { title, onClick } = props;
  return (
    <button
      type="button"
      className={[styles.button, styles.shadow].join(" ")}
      onClick={onClick}
    >
      <div>
        <BsBookmarkPlus />
      </div>
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
