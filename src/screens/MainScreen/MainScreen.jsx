import React from "react";
import styles from "./MainScreen.module.css";

function MainScreen() {
  return (
    <>
      <div className={styles.header}>
        <h1>Responsive</h1>
      </div>

      <div className={styles.row}>
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

      <div className={styles.footer}>
        <p>Make it responsive</p>
      </div>
    </>
  );
}

export default MainScreen;
