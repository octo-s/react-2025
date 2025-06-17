import React from "react";
import type { Dish as DishType } from "../../types/restaurant";
import { CounterButtons } from "../CounterButtons";
import styles from "./Dish.module.scss";
import { useCounter } from "../../hooks/useCounter";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectDishById } from "../../entities/dish/dishSlice";

const MAX_DISH_COUNT = 5;
const MIN_DISH_COUNT = 0;

type DishProps = {
  dishId: DishType["id"];
  canAddDish: boolean;
};

export const Dish: React.FC<DishProps> = ({ dishId, canAddDish }) => {
  const dish =
    useSelector((state: RootState) => selectDishById(state, dishId)) || {};

  const { name, price, ingredients } = dish;
  const { count, onDecrement, onIncrement } = useCounter(
    MAX_DISH_COUNT,
    MIN_DISH_COUNT,
  );

  return (
    <div className={styles.dish}>
      <h4>
        {name} - {price} eur
      </h4>
      <ul>
        {ingredients.length &&
          ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
      </ul>
      {canAddDish && (
        <CounterButtons
          value={count}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          minCount={MIN_DISH_COUNT}
          maxCount={MAX_DISH_COUNT}
        />
      )}
    </div>
  );
};
