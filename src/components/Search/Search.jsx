import React, { useState } from "react";
import styles from "./Search.module.css";

function Search({ setSearchQuery }) {
  return (
    <div className={styles.SearchComponent}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
