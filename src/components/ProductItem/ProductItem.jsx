import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";

function ProductItem({ game }) {
  const { id, name, background_image, rating } = game;

  return (
    <div className={styles.trendingItem}>
      <div className={styles.thumb}>
        <img alt="game-image" src={background_image} />
        <span className={styles.price}>{rating}</span>
      </div>
      <div className={styles.downContent}>
        <span className={styles.category}>
          <h4>{name}</h4>
          <Link to={`/products/${id}`}>
            <FaShoppingBag />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ProductItem;
