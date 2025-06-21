import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../data/normalized-mock";
import { type Dish } from "../../types/restaurant";

type DishEntities = {
  [id: string]: Dish;
};

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce<DishEntities>((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
};
const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishes: (state) => state.entities,
  },
});

export const { selectDishById, selectDishes } = dishSlice.selectors;

export default dishSlice;
