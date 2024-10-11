import React from "react";
import styles from "./TrendingSection.module.css";

function TrendingSection({ children }) {
  return (
    <div className={styles.trending}>
      <div className={styles.sectionHeading}>{children}</div>
    </div>
  );
}

export default TrendingSection;
