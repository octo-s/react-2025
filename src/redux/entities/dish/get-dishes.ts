import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TDish } from "../../../types/restaurant";
import type { ThunkApiConfig } from "../../../types/request";

export const getDishesByRestaurantId = createAsyncThunk<
  TDish[],
  string,
  ThunkApiConfig
>(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`,
      );
      if (!response.ok) return rejectWithValue("Failed to fetch dishes");

      const data = await response.json();
      return data;
    } catch {
      return rejectWithValue("Network error");
    }
  },
);
