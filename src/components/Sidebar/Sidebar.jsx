import React from "react";
import styles from "./Sidebar.module.css";
import { useGenres } from "./useGenres";
import { Link } from "react-router-dom";

function Sidebar() {
  const { genres = [], isLoading, error } = useGenres();

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  const sortedGenres = [...genres].sort(
    (a, b) => b.games_count - a.games_count
  );

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Most Popular Genres</h2>
      <ul className={styles.genreList}>
        {sortedGenres.map((genre) => (
          <li key={genre.id} className={styles.genreItem}>
            <Link to={``}>
              <span>{genre.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
