import React from "react";
import styles from "./Loading.module.scss";

export const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <span className={styles.text}>Загрузка...</span>
    </div>
  );
};
