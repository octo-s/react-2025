import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { selectDishEntities } from "../../redux/entities/dish/dishSlice";
import styles from "./MenuItemLink.module.scss";

type MenuItemLinkProps = {
  id: string;
};

export const MenuItemLink: React.FC<MenuItemLinkProps> = ({ id }) => {
  const dish = useSelector(selectDishEntities)[id];

  if (!dish) return null;

  return (
    <Link to={`/dish/${id}`} className={styles.menuItem}>
      {dish.name}
    </Link>
  );
};
