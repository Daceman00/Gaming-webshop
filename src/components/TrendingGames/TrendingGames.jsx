import React from "react";
import styles from "./TrendingGames.module.css";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGames } from "../Products/useGames";

import CategoryButtonLink from "../CategoryButtonLink/CategoryButtonLink";
import TrendingSection from "../TrendingSection/TrendingSection";
import Heading from "../Heading/Heading";

function TrendingGames() {
  const { games = [], isLoading, error } = useGames();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
  const top3games = sortedGames.slice(0, 3);

  return (
    <div className={styles.section}>
      <TrendingSection>
        <Heading>Top Rated Games</Heading>
        <CategoryButtonLink>
          <Link to="/products">View All Games</Link>
        </CategoryButtonLink>
      </TrendingSection>

      <div className={styles.productsList}>
        <ul>
          {top3games.map((game) => (
            <div key={game.id} className={styles.trendingItem}>
              <div className={styles.thumb}>
                <img alt="game-image" src={game.background_image} />
                <span className={styles.price}>{game.rating}</span>
              </div>
              <div className={styles.downContent}>
                <span className={styles.category}>
                  <h4>{game.name}</h4>
                  <Link to={`/products/${game.id}`}>
                    <FaShoppingBag />
                  </Link>
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrendingGames;
