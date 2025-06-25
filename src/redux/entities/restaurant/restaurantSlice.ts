import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type TRestaurant } from "../../../types/restaurant";
import { getRestaurants } from "./get-restaurants";
import { type RootState } from "../../store";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import { getRestaurantById } from "./get-restaurant-by-id";

const restaurantsAdapter = createEntityAdapter<TRestaurant>();

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: restaurantsAdapter.getInitialState({
    requestStatus: REQUEST_STATUSES.IDLE as RequestStatus,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        restaurantsAdapter.setAll(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        restaurantsAdapter.upsertOne(state, payload);
      }),
});

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantIds,
} = restaurantsAdapter.getSelectors<RootState>(
  (state) => state[restaurantSlice.name],
);
export default restaurantSlice;
