import React from "react";

import styles from "./CustomInput.module.css";

function CustomInput() {
  return (
    <div className={styles.inputContainer}>
      <i className="fa fa-user icon" />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Username"
        name="usrnm"
      />
    </div>
  );
}

export default CustomInput;
