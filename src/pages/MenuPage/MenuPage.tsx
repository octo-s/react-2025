import React from "react";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import { useOutletContext } from "react-router-dom";
import { Menu } from "../../components/Menu";

export const MenuPage: React.FC = () => {
  const { restaurant } = useOutletContext<{ restaurant: RestaurantType }>();

  if (!restaurant.name) {
    return null;
  }

  return <Menu restaurant={restaurant} />;
};
