import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { type TDish } from "../../../types/restaurant";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import { getDishesByRestaurantId } from "./get-dishes";
import { getDishById } from "./get-dish-by-id";
import type { RootState } from "../../store";
import { EMPTY_ARRAY } from "../../../constants";

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
      .addCase(
        getDishesByRestaurantId.fulfilled,
        (state, { payload, meta }) => {
          dishAdapter.upsertMany(state, payload);

          const dishIds = payload.map((dish) => dish.id);
          const restaurantId = meta.arg;

          state.dishIdsByRestaurant[restaurantId] = dishIds;
        },
      )
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        dishAdapter.upsertOne(state, payload);
      }),
});

export const {
  selectById: selectDishById,
  selectEntities: selectDishEntities,
} = dishAdapter.getSelectors<RootState>((state) => state[dishSlice.name]);

export const selectDishesByRestaurantId = (restaurantId: string) =>
  createSelector(
    [
      (state: RootState) =>
        state.dish.dishIdsByRestaurant[restaurantId] || EMPTY_ARRAY,
      selectDishEntities,
    ],
    (dishIds, entities) => dishIds.map((id) => entities[id]).filter(Boolean),
  );

export default dishSlice;
