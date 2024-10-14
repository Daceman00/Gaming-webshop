import React from "react";
import styles from "./Home.module.css";
import TrendingGames from "../TrendingGames/TrendingGames";
import Sidebar from "../Sidebar/Sidebar";

function Home() {
  return (
    <div className={styles.HomePage}>
      <Sidebar />
      <TrendingGames />
    </div>
  );
}

export default Home;
