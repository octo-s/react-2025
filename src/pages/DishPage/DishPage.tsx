import React, { useContext } from "react";
import { useParams } from "react-router";
import { Dish } from "../../components/Dish";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { useRequest } from "../../redux/hooks/use-request";
import type { TDish } from "../../types/restaurant";
import { getDishById } from "../../redux/entities/dish/get-dish-by-id";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectDishById } from "../../redux/entities/dish/dishSlice";

export const DishPage: React.FC = () => {
  const params = useParams<{ dishId: string }>();
  const dishId = params.dishId!;
  const { user } = useContext(UserContext);
  const { isLoading, isError } = useRequest<TDish>(getDishById, dishId);
  const dish = useSelector((state: RootState) => selectDishById(state, dishId));

  if (isLoading || !dish) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке блюда" />;
  }

  return <Dish dish={dish} canAddDish={!!user} />;
};
