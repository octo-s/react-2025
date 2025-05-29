import React from "react";
import styles from "./Title.module.scss";

type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};
