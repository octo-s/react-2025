import {
  addToCart,
  removeFromCart,
  selectItemQuantityById,
} from "../entities/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useCallback } from "react";

export const useCounter = (
  id: string,
  maxCount?: number,
  minCount?: number,
) => {
  const quantity = useSelector((state: RootState) =>
    selectItemQuantityById(state, id),
  );
  const dispatch = useDispatch();
  const onIncrement = useCallback(() => {
    if (maxCount && quantity === maxCount) {
      return;
    }

    dispatch(addToCart(id));
  }, [id, quantity, maxCount, dispatch]);
  const onDecrement = useCallback(() => {
    if (maxCount && quantity === minCount) {
      return;
    }

    dispatch(removeFromCart(id));
  }, [maxCount, quantity, minCount, dispatch, id]);

  return {
    quantity,
    onIncrement,
    onDecrement,
  };
};
