import React from "react";
import styles from "./Products.module.css";
import { useGames } from "./useGames";
import ProductItem from "../ProductItem/ProductItem";

function Products() {
  const { games, error, isLoading } = useGames();

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className={styles.container}>
      <h2>
        <em>All Games</em>
      </h2>
      <div className={styles.productsList}>
        <ul>
          {games.map((game) => (
            <ProductItem key={game.id} game={game} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
