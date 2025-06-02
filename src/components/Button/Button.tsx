import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "primary" | "secondary" | "outline";
  position?: "left" | "right" | "top" | "bottom";
}

export const Button: React.FC<ButtonProps> = ({
  appearance = "primary",
  position = "left",
  className,
  ...props
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[appearance],
    styles[position],
    className,
  );

  return <button className={buttonClass} {...props} />;
};
