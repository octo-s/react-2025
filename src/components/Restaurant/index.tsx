import React from "react";
import { Outlet } from "react-router";
import styles from "./Restaurant.module.scss";
import type { TRestaurant } from "../../types/restaurant";
import { RestaurantNavLink } from "../RestaurantNavLink";

type RestaurantProps = {
  restaurant: TRestaurant;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h2>{restaurant.name}</h2>
      <div className={styles.navContainer}>
        <RestaurantNavLink text="Меню" to={"menu"} />
        <RestaurantNavLink text="Отзывы" to={"reviews"} />
      </div>
      <Outlet />
    </div>
  );
};
