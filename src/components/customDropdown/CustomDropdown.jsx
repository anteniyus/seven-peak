import React, { useState } from "react";
import PropTypes from "prop-types";

import { v4 as UKG } from "uuid";

import { isFunction } from "../../utility/Validator";

const colourStyles = {
  fontSize: "16px",
  color: "#444",
  lineHeight: "1.3",
  padding: "0.6em 1.4em 0.5em 0.8em",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: "5% 0 0 0",
  borderBottom: "1px solid #aaa",
  border: "none",
  float: "right",
  outline: "none",
  boxShadow: "0 1px 0 1px rgba(0, 0, 0, 0.04)",
  backgroundColor: "aliceblue",
};

function CustomDropdown(props) {
  const { options, onChange } = props;
  const [value, setValue] = useState(0);

  function changeHandler(selectedValue) {
    setValue(selectedValue);
    console.log(onChange);
    if (isFunction(onChange)) onChange(selectedValue);
  }

  return (
    <select
      style={colourStyles}
      value={value}
      onChange={(event) => changeHandler(event.target.value)}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {options.map((n) => (
        <option value={n.value} key={UKG()}>
          {n.label}
        </option>
      ))}
    </select>
  );
}

CustomDropdown.defaultProps = {
  onChange: () => {},
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func,
};

export default CustomDropdown;
