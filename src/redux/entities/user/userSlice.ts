import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type User } from "../../../types/user";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import { getUsers } from "./get-users";
import type { RootState } from "../../store";

const userAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState({
    requestStatus: REQUEST_STATUSES.IDLE as RequestStatus,
  }),
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      userAdapter.setAll(state, payload);
    }),
});

export const { selectById: selectUserById, selectIds: selectUserIds } =
  userAdapter.getSelectors<RootState>((state) => state[userSlice.name]);

export default userSlice;
