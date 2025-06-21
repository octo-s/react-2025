import {
  createSlice,
  type PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

type CartState = {
  [dishId: string]: number;
};

const initialState: CartState = {};
const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, { payload }: PayloadAction<string>) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<string>) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectItemQuantityById: (state, dishId) => state[dishId] || 0,
  },
});
const selectCartSlice = (state: RootState) => state[cartSlice.name];

export const selectCartItems = createSelector([selectCartSlice], (cartSlice) =>
  Object.entries(cartSlice)
    .filter(([, quantity]) => quantity > 0)
    .map(([dishId]) => dishId),
);
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectItemQuantityById } = cartSlice.selectors;

export default cartSlice;
