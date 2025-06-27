import React from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/dishSlice";
import styles from "./Cart.module.scss";
import { selectCartItems } from "../../redux/entities/cart/cartSlice";
import type { RootState } from "../../redux/store";
import { useCounter } from "../../hooks/useCounter";
import { CounterButtons } from "../CounterButtons";

type CartItemProps = {
  dishId: string;
};

export const CartItem: React.FC<CartItemProps> = ({ dishId }) => {
  const { quantity, onIncrement, onDecrement } = useCounter(dishId, 5, 0);

  const dish =
    useSelector((state: RootState) => selectDishById(state, dishId)) || {};
  if (!dish) return null;

  return (
    <li>
      <CounterButtons
        value={quantity}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        maxCount={5}
        minCount={0}
      />
      {dish.name} — {quantity} шт. — {dish.price * quantity} ₽
    </li>
  );
};

export const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className={styles.cart}>
      <h3>Корзина</h3>
      {!cartItems.length && "Добавьте что-нибудь"}
      {!!cartItems.length && (
        <ul>
          {cartItems.map((dishId) => (
            <CartItem key={dishId} dishId={dishId} />
          ))}
        </ul>
      )}
    </div>
  );
};
