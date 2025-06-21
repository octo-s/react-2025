import React, { useContext } from "react";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { useOutletContext } from "react-router-dom";
import { Reviews } from "../../components/Reviews";

export const ReviewsPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { restaurant } = useOutletContext<{ restaurant: RestaurantType }>();

  if (!restaurant.name) {
    return null;
  }

  return <Reviews restaurant={restaurant} canAddReview={!!user} />;
};
