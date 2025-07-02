import React from "react";
import { useParams } from "react-router";
import { Restaurant } from "../../components/Restaurant";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantPage: React.FC = () => {
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const {
    data: restaurant,
    isFetching,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    }),
  });

  if (isFetching) {
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
