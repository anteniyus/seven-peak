import React from "react";

// import styled from "styled-components";
import styles from "./CustomInput.module.css";

// const CenteredDiv = styled.div`
//   padding: 2%;
//   text-align: center;
// `;

function CustomInput() {
  return (
    <>
      <div className={styles.inputContainer}>
        <i className="fa fa-user icon" />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Username"
          name="usrnm"
        />
      </div>
    </>
  );
}

export default CustomInput;
