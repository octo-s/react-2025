import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../data/normalized-mock";
import { type Review } from "../../types/restaurant";

type ReviewEntities = {
  [id: string]: Review;
};

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce<ReviewEntities>((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
};
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewSlice.selectors;

export default reviewSlice;
