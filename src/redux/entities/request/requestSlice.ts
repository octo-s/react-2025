import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  REQUEST_STATUSES,
  type RequestState,
  type RequestStatus,
} from "../../../types/request";

const initialState: RequestState = {};
const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state, requestId: string): RequestStatus =>
      state[requestId] || REQUEST_STATUSES.IDLE,
    selectIsLoading: (state, requestId: string) =>
      state[requestId] === REQUEST_STATUSES.PENDING,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (
          action,
        ): action is PayloadAction<unknown, string, { requestId: string }> =>
          action.type.endsWith(REQUEST_STATUSES.PENDING),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.PENDING;
        },
      )
      .addMatcher(
        (
          action,
        ): action is PayloadAction<unknown, string, { requestId: string }> =>
          action.type.endsWith(REQUEST_STATUSES.FULFILLED),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.FULFILLED;
        },
      )
      .addMatcher(
        (
          action,
        ): action is PayloadAction<unknown, string, { requestId: string }> =>
          action.type.endsWith(REQUEST_STATUSES.REJECTED),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.REJECTED;
        },
      ),
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;

export default requestSlice;
