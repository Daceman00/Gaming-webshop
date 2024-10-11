import React from "react";
import styles from "./CategoryButton.module.css";

function CategoryButtonLink({ children }) {
  return (
    <div className={styles.mainButton}>
      <a>{children}</a>
    </div>
  );
}

export default CategoryButtonLink;
