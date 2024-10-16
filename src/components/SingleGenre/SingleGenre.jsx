import React from "react";
import Heading from "../Heading/Heading";
import { useSingleGenre } from "./useSingleGenre";
import { useGames } from "../Products/useGames";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./SingleGenre.module.css";

function SingleGenre() {
  const { genre, isLoading, error } = useSingleGenre();
  const { games = [] } = useGames();

  if (isLoading || !genre) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  console.log(genre.slug);

  const filteredGames = games.filter(
    (game) =>
      game.genres &&
      Array.isArray(game.genres) &&
      game.genres.some((g) => g.slug.toLowerCase() === genre.slug.toLowerCase())
  );

  return filteredGames.length === 0 ? (
    <div className={styles.container}>
      <Heading>No {genre.slug} games found</Heading>
    </div>
  ) : (
    <div className={styles.container}>
      <Heading>{genre.slug}</Heading>
      <div className={styles.productsList}>
        <ul>
          {filteredGames.map((game) => (
            <ProductItem key={game.id} game={game} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleGenre;
