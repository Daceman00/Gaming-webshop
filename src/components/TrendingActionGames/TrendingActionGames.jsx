import React from "react";
import { useGames } from "../Products/useGames";
import TrendingSection from "../TrendingSection/TrendingSection";
import Heading from "../Heading/Heading";
import CategoryButtonLink from "../CategoryButtonLink/CategoryButtonLink";
import { Link } from "react-router-dom";
import styles from "./TrendingActionGames.module.css";
import { FaShoppingBag } from "react-icons/fa";

function TrendingActionGames() {
  const { games = [], isLoading, error } = useGames();

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  const filteredActionGames = games.filter(
    (game) =>
      game.genres &&
      Array.isArray(game.genres) &&
      game.genres.some((g) => g.slug.toLowerCase() === "action")
  );

  const sortedActionGames = [...filteredActionGames].sort(
    (a, b) => b.rating - a.rating
  );

  const top3ActionGames = sortedActionGames.slice(0, 3);

  return (
    <div className={styles.section}>
      <TrendingSection>
        <Heading>Top Action Games</Heading>
        <CategoryButtonLink>
          <Link to="/genres/action">View Action Games</Link>
        </CategoryButtonLink>
      </TrendingSection>

      <div className={styles.productsList}>
        <ul>
          {top3ActionGames.map((game) => (
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

export default TrendingActionGames;
