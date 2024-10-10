import React, { createContext, useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./ProductDetails.module.css";
import { useGame } from "./useGame";
import { FaStar } from "react-icons/fa";

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
  const [toggle, setToggle] = useState("desc");
  const { game } = useDetailsContext();
  const { description_raw, metacritic_platforms } = game;

  return (
    <>
      <div className={styles.downContent}>
        <button className={styles.button1} onClick={() => setToggle("review")}>
          Review
        </button>
        <button className={styles.button2} onClick={() => setToggle("desc")}>
          Description
        </button>
        {toggle === "desc" ? (
          <p>{description_raw}</p>
        ) : (
          <ul>
            {metacritic_platforms.map((item) => (
              <li key={item.id}>
                <span>Metacritic score: {item.metascore}</span>
                <a href={item.url}>{item.url}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
