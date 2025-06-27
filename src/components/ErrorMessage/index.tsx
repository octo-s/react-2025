import React from "react";
import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  message?: string;
};
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Произошла ошибка при загрузке",
}) => {
  return <div className={styles.error}>{message}</div>;
};
