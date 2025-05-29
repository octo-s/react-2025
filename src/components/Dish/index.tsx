import React from "react";
import type { Dish as DishType } from "../../types/restaurant";
import { useCounter } from "../hooks/useCounter.ts";
import { CounterButtons } from "../CounterButtons";
import styles from "./Dish.module.scss";

const MAX_DISH_COUNT = 5;
const MIN_DISH_COUNT = 0;

type DishProps = {
  dish: DishType;
};

export const Dish: React.FC<DishProps> = ({ dish }) => {
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
      <CounterButtons
        value={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        minCount={MIN_DISH_COUNT}
        maxCount={MAX_DISH_COUNT}
      />
    </div>
  );
};
