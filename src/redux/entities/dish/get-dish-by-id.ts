import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectDishById } from "./dishSlice";
import { type TDish } from "../../../types/restaurant";
import type { ThunkApiConfig } from "../../../types/request";

export const getDishById = createAsyncThunk<TDish, string, ThunkApiConfig>(
  "dishes/getDishById",
  async (dishId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
      if (!response.ok) return rejectWithValue("Failed to fetch dish");

      const data = await response.json();
      return data;
    } catch {
      return rejectWithValue("Network error");
    }
  },
  {
    condition: (dishId, { getState }) => {
      const state = getState();
      return selectDishById(state, dishId) === undefined;
    },
  },
);
