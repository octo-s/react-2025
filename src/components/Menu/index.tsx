import React from "react";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import sharedStyles from "../../styles/shared.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishes } from "../../entities/dish/dishSlice";
import styles from "./Menu.module.scss";

type MenuProps = {
  restaurant: RestaurantType;
};

export const Menu: React.FC<MenuProps> = ({ restaurant }) => {
  const dishes = useSelector(selectDishes);

  const { name, menu } = restaurant;
  if (!name) {
    return null;
  }

  return (
    <>
      {menu.length ? (
        <div className={styles.menuList}>
          {menu.map((dishId) => {
            const dish = dishes[dishId];
            if (!dish) return null;

            return (
              <Link
                to={`/dish/${dishId}`}
                key={dishId}
                className={styles.menuItem}
              >
                {dish.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={sharedStyles.empty}>Ресторан пока не добавил блюда</div>
      )}
    </>
  );
};
