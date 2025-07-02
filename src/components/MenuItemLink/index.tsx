import React from "react";
import { Link } from "react-router";
import styles from "./MenuItemLink.module.scss";
import { type TDish } from "../../types/restaurant";

type MenuItemLinkProps = {
  dish: TDish;
};

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({ dish }) => {
  if (!dish) return null;

  return (
    <Link to={`/dish/${dish.id}`} className={styles.menuItem}>
      {dish.name}
    </Link>
  );
};
