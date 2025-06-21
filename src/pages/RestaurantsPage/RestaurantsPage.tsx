import React from "react";
import styles from "./RestaurantsPage.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../entities/restaurant/restaurantSlice";
import { Outlet } from "react-router";
import { RestaurantTab } from "../../components/RestaurantTab";

export const RestaurantsPage: React.FC = () => {
  const restaurants = useSelector(selectRestaurantIds);

  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <RestaurantTab key={restaurant} id={restaurant} />
      ))}
      <Outlet />
    </div>
  );
};
