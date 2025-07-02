import { createAsyncThunk } from "@reduxjs/toolkit";
import { type TUser } from "../../../types/user";
import { selectUserIds } from "./userSlice";
import type { ThunkApiConfig } from "../../../types/request";

export const getUsers = createAsyncThunk<TUser[], void, ThunkApiConfig>(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3001/api/users`);
      if (!res.ok) return rejectWithValue("Failed to fetch users");
      return await res.json();
    } catch {
      return rejectWithValue("Network error");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();

      return selectUserIds(state).length === 0;
    },
  },
);
