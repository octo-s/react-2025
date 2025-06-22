import React from "react";
import { useParams } from "react-router";
import { Menu } from "../../components/Menu";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";

export const MenuPage: React.FC = () => {
  const { restaurantId } = useParams();
  const restaurant =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId),
    ) || {};

  if (!restaurant.name) {
    return null;
  }

  return <Menu restaurant={restaurant} />;
};
