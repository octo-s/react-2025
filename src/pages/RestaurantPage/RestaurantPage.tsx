import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";
import { useParams } from "react-router";
import { Restaurant } from "../../components/Restaurant";

export const RestaurantPage: React.FC = () => {
  const { restaurantId } = useParams();
  const restaurant =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId),
    ) || {};

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
