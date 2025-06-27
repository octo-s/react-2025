import { createAsyncThunk } from "@reduxjs/toolkit";
import { type TRestaurant } from "../../../types/restaurant";
import { selectRestaurantById } from "./restaurantSlice";
import { type ThunkApiConfig } from "../../../types/request";

export const getRestaurantById = createAsyncThunk<
  TRestaurant,
  string,
  ThunkApiConfig
>(
  "restaurants/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/restaurant/${restaurantId}`,
      );
      if (!response.ok) return rejectWithValue("Failed to fetch restaurant");

      const data = await response.json();
      return data;
    } catch {
      return rejectWithValue("Network error");
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();

      return !selectRestaurantById(state, restaurantId);
    },
  },
);
