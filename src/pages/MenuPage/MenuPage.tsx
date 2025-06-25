import React, { useMemo } from "react";
import { useParams } from "react-router";
import { Menu } from "../../components/Menu";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getDishesByRestaurantId } from "../../redux/entities/dish/get-dishes";
import { useRequest } from "../../redux/hooks/use-request";
import type { TDish } from "../../types/restaurant";
import { ErrorMessage } from "../../components/ErrorMessage";
import { selectDishesByRestaurantId } from "../../redux/entities/dish/dishSlice";
import { Loading } from "../../components/Loading";

export const MenuPage: React.FC = () => {
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const selectDishes = useMemo(
    () => selectDishesByRestaurantId(restaurantId),
    [restaurantId],
  );

  const menu = useSelector((state: RootState) => selectDishes(state));

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

  return <Menu menu={menu} />;
};
