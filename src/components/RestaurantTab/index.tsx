import React from "react";
import classNames from "classnames";
import styles from "./RestaurantTab.module.scss";
import { NavLink } from "react-router";
import { type TRestaurant } from "../../types/restaurant";

type RestaurantTabProps = {
  restaurant: TRestaurant;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({ restaurant }) => {
  if (!restaurant.name) {
    return null;
  }

  return (
    <NavLink
      to={`/restaurants/${restaurant.id}`}
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles.active]: isActive,
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
