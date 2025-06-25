import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { type TReview } from "../../../types/restaurant";
import { REQUEST_STATUSES, type RequestStatus } from "../../../types/request";
import { getReviewsByRestaurantId } from "./get-reviews";
import type { RootState } from "../../store";
import { EMPTY_ARRAY } from "../../../constants";

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
      (state, { payload, meta }) => {
        reviewAdapter.upsertMany(state, payload);

        const reviewIds = payload.map((review) => review.id);
        const restaurantId = meta.arg;

        state.reviewIdsByRestaurant[restaurantId] = reviewIds;
      },
    ),
});

export const {
  selectById: selectReviewById,
  selectEntities: selectReviewEntities,
} = reviewAdapter.getSelectors<RootState>((state) => state[reviewSlice.name]);

export const selectReviewsByRestaurantId = (restaurantId: string) =>
  createSelector(
    [
      (state: RootState) =>
        state.review.reviewIdsByRestaurant[restaurantId] || EMPTY_ARRAY,
      selectReviewEntities,
    ],
    (reviewIds, entities) =>
      reviewIds.map((id) => entities[id]).filter(Boolean),
  );

export default reviewSlice;
