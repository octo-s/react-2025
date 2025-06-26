import React from "react";
import { type TRestaurant } from "../../types/restaurant";
import sharedStyles from "../../styles/shared.module.scss";
import { Link } from "react-router";
import styles from "./Menu.module.scss";
import { selectDishEntities } from "../../redux/entities/dish/dishSlice";
import { useSelector } from "react-redux";

type MenuProps = {
  menu: TRestaurant["menu"];
};

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const restaurantDishes = useSelector(selectDishEntities);

  return menu.length ? (
    <div className={styles.menuList}>
      {menu.map((id) => {
        return (
          <Link key={id} to={`/dish/${id}`} className={styles.menuItem}>
            {restaurantDishes[id]?.name}
          </Link>
        );
      })}
    </div>
  ) : (
    <div className={sharedStyles.empty}>Ресторан пока не добавил блюда</div>
  );
};
