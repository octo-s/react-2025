import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { type TReview } from "../../../types/restaurant";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import type { RootState } from "../../store";
import { getReviewsByRestaurantId } from "./get-reviews";

const reviewAdapter = createEntityAdapter<TReview>();

type ReviewState = {
  requestStatus: RequestStatus;
  reviewIdsByRestaurant: Record<string, string[]>;
};

const reviewSlice = createSlice({
  name: "review",
  initialState: reviewAdapter.getInitialState<ReviewState>({
    requestStatus: REQUEST_STATUSES.IDLE as RequestStatus,
    reviewIdsByRestaurant: {},
  }),
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        reviewAdapter.setAll(state, payload);
      },
    ),
});

export const {
  selectEntities: selectReviewEntities,
  selectIds: selectReviewIds,
  selectById: selectReviewById,
} = reviewAdapter.getSelectors<RootState>((state) => state[reviewSlice.name]);

export default reviewSlice;
