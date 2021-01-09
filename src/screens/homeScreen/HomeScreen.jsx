import React, { Component } from "react";
import styles from "../mainScreen/MainScreen.module.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        Hello home
        <div
          className={[styles.col3, styles["col-s-3"], styles.menu].join(" ")}
        >
          <ul>
            <li>This is Li</li>
            <li>This is Li</li>
            <li>This is Li</li>
            <li>This is Li</li>
          </ul>
        </div>
        <div className={[styles["col-6"], styles["col-s-9"]].join(" ")}>
          <h1>This is h1</h1>
          <p>This is some text</p>
        </div>
        <div className={[styles["col-3"], styles["col-s-12"]].join(" ")}>
          <div className={styles.aside}>
            <h2>Side head</h2>
            <p>Side head details</p>
            <h2>Side head</h2>
            <p>Side head details</p>
            <h2>Side head</h2>
            <p>Side head details</p>
          </div>
        </div>
      </div>
    );
  }
}
