import { Link } from "react-router";
import styles from "./Home.module.scss";
import React from "react";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать!</h1>
      <p className={styles.subtitle}>
        Выберите ресторан и попробуйте лучшие блюда города
      </p>
      <Link to="/restaurants" className={styles.button}>
        К ресторанам
      </Link>
    </div>
  );
};
