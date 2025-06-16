import React, { useState } from "react";

import type { Restaurant as RestaurantType } from "../../data/normalized-mock";
import { Restaurant } from "../Restaurant";

import styles from "./RestaurantTabs.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../entities/restaurant/restaurantSlice";
import { RestaurantTab } from "./RestaurantTab";

export const RestaurantTabs: React.FC = () => {
  const restaurants = useSelector(selectRestaurantIds);

  const [activeRestaurant, setActiveRestaurant] = useState<
    RestaurantType["id"]
  >(restaurants[0]);

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
      <Restaurant restaurantId={activeRestaurant} />

      {/* todo для тестирования ProgressBar */}
      {Array.from({ length: 10 }, (_, iterator) => (
        <Restaurant key={iterator} restaurantId={activeRestaurant} />
      ))}
    </div>
  );
};
