import React from "react";
import styles from "./Heading.module.css";

function Heading({ children }) {
  return (
    <h2 className={styles.heading}>
      <em className={styles.heading}>{children}</em>
    </h2>
  );
}

export default Heading;
