import React from "react";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import sharedStyles from "../../styles/shared.module.scss";
import { Link } from "react-router";
import styles from "./Menu.module.scss";
import { DishById } from "../DishById";

type MenuProps = {
  restaurant: RestaurantType;
};

export const Menu: React.FC<MenuProps> = ({ restaurant }) => {
  const { name, menu } = restaurant;
  if (!name) {
    return null;
  }

  return menu.length ? (
    <div className={styles.menuList}>
      {menu.map((dishId) => {
        return (
          <DishById dishId={dishId} key={dishId}>
            {(dish) => (
              <Link to={`/dish/${dishId}`} className={styles.menuItem}>
                {dish.name}
              </Link>
            )}
          </DishById>
        );
      })}
    </div>
  ) : (
    <div className={sharedStyles.empty}>Ресторан пока не добавил блюда</div>
  );
};
