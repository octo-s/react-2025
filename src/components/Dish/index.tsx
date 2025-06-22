import React from "react";
import type { Dish as DishType } from "../../types/restaurant";
import { CounterButtons } from "../CounterButtons";
import styles from "./Dish.module.scss";
import { useCounter } from "../../hooks/useCounter";
import { useNavigate } from "react-router";
import { Button } from "../Button/Button";

const MAX_DISH_COUNT = 5;
const MIN_DISH_COUNT = 0;

type DishProps = {
  dish: DishType;
  canAddDish: boolean;
};

export const Dish: React.FC<DishProps> = ({ dish, canAddDish }) => {
  const navigate = useNavigate();

  const { name, price, ingredients } = dish;
  const { quantity, onDecrement, onIncrement } = useCounter(
    dish.id,
    MAX_DISH_COUNT,
    MIN_DISH_COUNT,
  );

  return (
    <div className={styles.dish}>
      <Button position="top" type="button" onClick={() => navigate(-1)}>
        Вернуться
      </Button>
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
          value={quantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          minCount={MIN_DISH_COUNT}
          maxCount={MAX_DISH_COUNT}
        />
      )}
    </div>
  );
};
