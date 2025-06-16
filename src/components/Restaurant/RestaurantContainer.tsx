import React, { useContext } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { Restaurant } from "./index";

type RestaurantProps = {
  restaurantId: RestaurantType["id"];
};

export const RestaurantContainer: React.FC<RestaurantProps> = ({
  restaurantId,
}) => {
  const restaurant =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId),
    ) || {};

  const { user } = useContext(UserContext);

  return (
    <Restaurant
      restaurant={restaurant}
      canWriteReview={!!user}
      canAddDish={!!user}
    />
  );
};
