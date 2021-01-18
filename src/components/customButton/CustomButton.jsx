import React from "react";
import PropTypes from "prop-types";

import styles from "./CustomButton.module.css";

function CustomButton(props) {
  const { title, onClick, iconComponent, bgColor } = props;
  const Icon = iconComponent;
  return (
    <button
      type="button"
      className={[styles.button, styles.shadow].join(" ")}
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <div>{Icon && <Icon.type />}</div>
      {title}
    </button>
  );
}

CustomButton.defaultProps = {
  iconComponent: null,
  onClick: () => {},
  bgColor: "#09357b",
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconComponent: PropTypes.element,
  bgColor: PropTypes.string,
};

export default CustomButton;
