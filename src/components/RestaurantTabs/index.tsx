import React, { useState } from "react";
import styles from "./RestaurantTabs.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../entities/restaurant/restaurantSlice";
import { RestaurantTab } from "./RestaurantTab";
import { RestaurantContainer } from "../Restaurant/RestaurantContainer";
import { type Restaurant } from "../../types/restaurant";

export const RestaurantTabs: React.FC = () => {
  const restaurants = useSelector(selectRestaurantIds);

  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant["id"]>(
    restaurants[0],
  );

  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <RestaurantTab
          key={restaurant}
          id={restaurant}
          onClick={() => setActiveRestaurant(restaurant)}
          isActive={restaurant === activeRestaurant}
        />
      ))}
      <RestaurantContainer restaurantId={activeRestaurant} />
    </div>
  );
};
