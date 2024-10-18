import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Navbar() {
  return (
    <div className={styles.container}>
      <a className={styles.logo}>
        <img src="/src/assets/images/logo.png" alt="logo" />
      </a>
      <ul className={styles.nav}>
        <li>
          <a>
            <Link to="/">Home</Link>
          </a>
        </li>
        <li>
          <a>
            <Link>Our Shop</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/products">Products</Link>
          </a>
        </li>
        <li>
          <a>
            <Link>Contact Us</Link>
          </a>
        </li>
        <li>
          <a>
            <Link>Sign In</Link>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
