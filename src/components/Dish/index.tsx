import type {Dish as DishType} from "../../types/restaurant";
import {useCounter} from "../hooks/useCounter.ts";

const MAX_DISH_COUNT = 5;
const MIN_DISH_COUNT = 0;

type DishProps = {
    dish: DishType;
}

export const Dish = ({dish}:DishProps) => {
    const {name, price, ingredients} = dish;
    const {count, onDecrement, onIncrement} = useCounter(MAX_DISH_COUNT, MIN_DISH_COUNT);

    return (
        <>
            <h4>{name} - {price} eur</h4>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={onDecrement} disabled={count === MIN_DISH_COUNT}>-</button>
            {count}
            <button onClick={onIncrement} disabled={count === MAX_DISH_COUNT}>+</button>
        </>
    );
};

