import React from "react";
import { useSelector } from "react-redux";
import { selectDishes } from "../../entities/dish/dishSlice";
import { type Dish } from "../../types/restaurant";

type DishByIdProps = {
  dishId: string;
  children: (_dish: Dish) => React.ReactNode;
};

export const DishById: React.FC<DishByIdProps> = ({ dishId, children }) => {
  const dishes = useSelector(selectDishes);
  const dish = dishes[dishId];

  if (!dish) return null;

  return <>{children(dish)}</>;
};
