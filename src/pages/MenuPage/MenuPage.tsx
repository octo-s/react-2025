import React from "react";
import { useParams } from "react-router";
import { Menu } from "../../components/Menu";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getDishesByRestaurantId } from "../../redux/entities/dish/get-dishes";
import { useRequest } from "../../redux/hooks/use-request";
import type { TDish } from "../../types/restaurant";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice";

export const MenuPage: React.FC = () => {
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId),
  );

  const { isLoading, isError } = useRequest<TDish[]>(
    getDishesByRestaurantId,
    restaurantId as string,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке меню" />;
  }

  return <Menu menu={restaurant.menu} />;
};
