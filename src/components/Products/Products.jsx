import React from "react";
import styles from "./Products.module.css";
import { useGames } from "./useGames";
import ProductItem from "../ProductItem/ProductItem";
import Heading from "../Heading/Heading";

function Products({ searchQuery }) {
  const { games, error, isLoading } = useGames();

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...{error.message}</h2>;

  const searchedGames = games.filter((game) =>
    searchQuery.length >= 3
      ? game.name.toLowerCase().includes(searchQuery.toLowerCase())
      : false
  );

  return (
    <div className={styles.container}>
      <Heading>
        {searchedGames.length > 0 ? "Search Results" : "All Games"}
      </Heading>{" "}
      <div className={styles.productsList}>
        <ul>
          {searchedGames.length > 0 ? (
            searchedGames.map((game) => (
              <ProductItem key={game.id} game={game} />
            ))
          ) : searchQuery.length >= 3 ? (
            <Heading>No games found </Heading>
          ) : (
            games.map((game) => <ProductItem key={game.id} game={game} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default Products;
