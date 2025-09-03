import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img
            src="/src/assets/images/logo.png"
            alt="logo"
            className={styles.logo}
          />
        </div>

        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/shop" className={styles.navLink}>
              Our Shop
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              Contact Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/signin"
              className={`${styles.navLink} ${styles.ctaButton}`}
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
