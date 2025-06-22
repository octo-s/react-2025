import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { useParams } from "react-router";
import { Reviews } from "../../components/Reviews";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";

export const ReviewsPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();
  const restaurant =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId),
    ) || {};

  if (!restaurant.name) {
    return null;
  }

  return <Reviews restaurant={restaurant} canAddReview={!!user} />;
};
