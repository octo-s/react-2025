import React from "react";
import classNames from "classnames";
import styles from "./RestaurantTab.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice";
import { type RootState } from "../../redux/store";
import { NavLink } from "react-router";

type RestaurantTabProps = {
  id: string;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({ id }) => {
  const restaurant =
    useSelector((state: RootState) => selectRestaurantById(state, id)) || {};

  if (!restaurant.name) {
    return null;
  }

  return (
    <NavLink
      to={`/restaurants/${id}`}
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
