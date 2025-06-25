import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useParams } from "react-router";
import { Restaurant } from "../../components/Restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice";
import { useRequest } from "../../redux/hooks/use-request";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import { getRestaurantById } from "../../redux/entities/restaurant/get-restaurant-by-id";
import { type TRestaurant } from "../../types/restaurant";

export const RestaurantPage: React.FC = () => {
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  const { isLoading, isError } = useRequest<TRestaurant>(
    getRestaurantById,
    restaurantId,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
