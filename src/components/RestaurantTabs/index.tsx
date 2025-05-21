import { restaurants } from "../../data/mock.ts";
import React, { useState } from "react";

import type { Restaurant as RestaurantType } from "../../types/restaurant";
import { Restaurant } from "../Restaurant";

export const RestaurantTabs: React.FC = () => {
  const [activeRestaurant, setActiveRestaurant] = useState<RestaurantType>(
    restaurants[0],
  );

  return (
    <>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => setActiveRestaurant(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};
