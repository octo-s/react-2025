import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type TDish } from "../../../types/restaurant";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import { getDishesByRestaurantId } from "./get-dishes";
import type { RootState } from "../../store";
import { getDishById } from "./get-dish-by-id";

type DishState = {
  requestStatus: RequestStatus;
  dishIdsByRestaurant: Record<string, string[]>;
};

const dishAdapter = createEntityAdapter<TDish>();

const dishSlice = createSlice({
  name: "dish",
  initialState: dishAdapter.getInitialState<DishState>({
    requestStatus: REQUEST_STATUSES.IDLE,
    dishIdsByRestaurant: {},
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        dishAdapter.setAll(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        dishAdapter.upsertOne(state, payload);
      }),
});

export const {
  selectById: selectDishById,
  selectEntities: selectDishEntities,
  selectIds: selectDishIds,
} = dishAdapter.getSelectors<RootState>((state) => state[dishSlice.name]);

export default dishSlice;
