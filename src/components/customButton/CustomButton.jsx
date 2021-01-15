import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomButton.module.css";

function CustomButton(props) {
  const { title, onClick, iconComponent } = props;
  const Icon = iconComponent;
  return (
    <button
      type="button"
      className={[styles.button, styles.shadow].join(" ")}
      onClick={onClick}
    >
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <div>{Icon && <Icon.type />}</div>
      {title}
    </button>
  );
}

CustomButton.defaultProps = {
  iconComponent: null,
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconComponent: PropTypes.element,
};

export default CustomButton;
