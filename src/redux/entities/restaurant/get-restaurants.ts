import { createAsyncThunk } from "@reduxjs/toolkit";
import { type TRestaurant } from "../../../types/restaurant";
import { selectRestaurantIds } from "./restaurantSlice";
import { type ThunkApiConfig } from "../../../types/request";
export const getRestaurants = createAsyncThunk<
  TRestaurant[],
  void,
  ThunkApiConfig
>(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("Failed to fetch restaurants");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectRestaurantIds(state).length === 0;
    },
  },
);
