import React from "react";
import { Outlet } from "react-router";
import styles from "./Restaurant.module.scss";
import type { Restaurant as RestaurantType } from "../../types/restaurant";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

type RestaurantProps = {
  restaurant: RestaurantType;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h2>{restaurant.name}</h2>
      <div className={styles.navContainer}>
        <NavLink
          to={"menu"}
          className={({ isActive }) =>
            classNames(styles.navLink, {
              [styles.active]: isActive,
            })
          }
        >
          <h3>Меню</h3>
        </NavLink>
        <NavLink
          to={"reviews"}
          className={({ isActive }) =>
            classNames(styles.navLink, {
              [styles.active]: isActive,
            })
          }
        >
          <h3>Отзывы</h3>
        </NavLink>
      </div>

      <Outlet context={{ restaurant }} />
    </div>
  );
};
