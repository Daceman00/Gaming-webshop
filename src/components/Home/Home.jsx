import React from "react";
import styles from "./Home.module.css";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGames } from "../Products/useGames";

function Home() {
  const { games = [], isLoading, error } = useGames();

  const sortedGames = [...games].sort((a, b) => b.rating - a.rating);
  const top3games = sortedGames.slice(0, 3);

  return (
    <div className={styles.section}>
      <div className={styles.trending}>
        <div className={styles.sectionHeading}>
          <h2>
            <em>Top Rated Games</em>
          </h2>
          <div className={styles.mainButton}>
            <a>
              <Link to="/products">View All</Link>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.productsList}>
        <ul>
          {top3games.map((game) => (
            <div className={styles.trendingItem}>
              <div className={styles.thumb}>
                <img alt="game-image" src={game.background_image} />
                <span className={styles.price}>{game.rating}</span>
              </div>
              <div className={styles.downContent}>
                <span className={styles.category}>
                  <h4>{game.name}</h4>
                  <a>
                    <FaShoppingBag />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
