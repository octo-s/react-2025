import { restaurants } from "../../data/mock.ts";
import React, { useState } from "react";

import type { Restaurant as RestaurantType } from "../../types/restaurant";
import { Restaurant } from "../Restaurant";

import classNames from "classnames";
import styles from "./RestaurantTabs.module.scss";
import { Button } from "../Button/Button";

export const RestaurantTabs: React.FC = () => {
  const [activeRestaurant, setActiveRestaurant] = useState<RestaurantType>(
    restaurants[0],
  );

  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <Button
          key={restaurant.id}
          onClick={() => setActiveRestaurant(restaurant)}
          className={classNames(styles.button, {
            [styles.active]: restaurant.id === activeRestaurant.id,
          })}
        >
          {restaurant.name}
        </Button>
      ))}
      <Restaurant restaurant={activeRestaurant} />

      {/* todo для тестирования ProgressBar */}
      {Array.from({ length: 10 }, (_, iterator) => (
        <Restaurant key={iterator} restaurant={activeRestaurant} />
      ))}
    </div>
  );
};
