import React, { createContext, useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductDetails.module.css";
import { useGame } from "./useGame";
import { FaExternalLinkAlt, FaStar } from "react-icons/fa";

const ProductsDetailsContext = createContext();

function useDetailsContext() {
  const context = useContext(ProductsDetailsContext);
  if (!context) {
    throw new Error("useDetailsContext must be used within a DetailsContext");
  }
  return context;
}

function ProductDetails({ children }) {
  const { game, isLoading, error } = useGame();

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>No game could be found</p>;

  return (
    <ProductsDetailsContext.Provider value={{ game }}>
      {children}
    </ProductsDetailsContext.Provider>
  );
}

ProductDetails.AllDetails = function ProductDetailsAllDetails() {
  const { game } = useDetailsContext();
  const { name, background_image, rating } = game;
  return (
    <>
      <Navbar />
      <div className={styles.header}>
        <h3>{name}</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.leftImage}>
          <img alt="game-image" src={background_image} />
        </div>
        <div className={styles.details}>
          <h3>{name}</h3>
          <span>
            <span>
              <FaStar />
            </span>
            <em>{rating}</em>
          </span>
        </div>
      </div>
      <hr />
    </>
  );
};

ProductDetails.Buttons = function ProductDetailsButtons() {
  const [toggle, setToggle] = useState("description");
  const { game } = useDetailsContext();
  const { description_raw, metacritic_platforms } = game;

  const sortedMetacriticScores = [...metacritic_platforms].sort(
    (a, b) => b.metascore - a.metascore
  );

  return (
    <>
      <div className={styles.downContent}>
        <button
          className={`${styles.button1} ${
            toggle === "review" ? styles.activeButton : ""
          }`}
          onClick={() => setToggle("review")}
        >
          Review
        </button>
        <button
          className={`${styles.button2} ${
            toggle === "description" ? styles.activeButton : ""
          }`}
          onClick={() => setToggle("description")}
        >
          Description
        </button>
        {toggle === "description" ? (
          <p>{description_raw}</p>
        ) : (
          <div className={styles.reviews}>
            <h3>Reviews and Metacritic Scores</h3>
            {sortedMetacriticScores.length > 0 ? (
              <ul className={styles.reviewList}>
                {sortedMetacriticScores.map((item) => (
                  <li key={item.id} className={styles.reviewItem}>
                    <div className={styles.metascore}>
                      <span>Metacritic Score: </span>
                      <span className={styles.score}>{item.metascore}</span>
                    </div>
                    <div className={styles.reviewLink}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> {item.url}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews or Metacritic scores available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
