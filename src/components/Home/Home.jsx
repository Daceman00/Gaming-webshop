import React from "react";
import styles from "./Home.module.css";
import TrendingGames from "../TrendingGames/TrendingGames";
import Sidebar from "../Sidebar/Sidebar";
import TrendingActionGames from "../TrendingActionGames/TrendingActionGames";

function Home() {
  return (
    <div className={styles.HomePage}>
      <Sidebar />
      <div className={styles.MainContent}>
        <TrendingGames />
        <TrendingActionGames />
      </div>
    </div>
  );
}

export default Home;
