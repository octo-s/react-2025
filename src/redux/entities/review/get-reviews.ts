import { createAsyncThunk } from "@reduxjs/toolkit";
import { type TReview } from "../../../types/restaurant";
import { type ThunkApiConfig } from "../../../types/request";

export const getReviewsByRestaurantId = createAsyncThunk<
  TReview[],
  string,
  ThunkApiConfig
>(
  "reviews/getByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
      );
      if (!res.ok) return rejectWithValue("Failed to fetch reviews");
      return await res.json();
    } catch {
      return rejectWithValue("Network error");
    }
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();

      return state.review.reviewIdsByRestaurant[restaurantId] === undefined;
    },
  },
);
