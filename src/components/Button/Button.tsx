import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  position?: "left" | "right" | "top" | "bottom";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  position = "left",
  className,
  ...props
}) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[position],
    className,
  );

  return <button className={buttonClass} {...props} />;
};
