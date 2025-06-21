import React, { useContext } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useParams } from "react-router";
import { Dish } from "../../components/Dish";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { selectDishById } from "../../entities/dish/dishSlice";

export const DishPage: React.FC = () => {
  const { dishId } = useParams();
  const { user } = useContext(UserContext);

  const dish =
    useSelector((state: RootState) => selectDishById(state, dishId)) || {};

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} canAddDish={!!user} />;
};
