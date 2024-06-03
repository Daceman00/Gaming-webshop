import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p>
          Copyright © 2048 LUGX Gaming Company. All rights reserved.
          &nbsp;&nbsp;{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
