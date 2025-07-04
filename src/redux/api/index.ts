import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  TDish,
  TRestaurant,
  TReview,
  TNewReviewData,
  TReviewData,
} from "../../types/restaurant";
import type { TUser } from "../../types/user";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getUsers: builder.query<TUser[], void>({
      query: () => "/users",
      keepUnusedDataFor: 300,
    }),
    getRestaurants: builder.query<TRestaurant[], void>({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query<TRestaurant, string>({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query<TReview[], string>({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "Reviews", id: "all" }],
    }),
    getDishesByRestaurantId: builder.query<TDish[], string>({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query<TDish, string>({
      query: (dishId) => `/dish/${dishId}`,
    }),
    //     2. POST /api/review/:restaurantId -
    //     создать отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)
    // 3. PATCH /api/review/:reviewId
    // - изменить отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)

    addReview: builder.mutation<void, TNewReviewData>({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
    changeReview: builder.mutation<void, TReviewData>({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesByRestaurantIdQuery,
  useAddReviewMutation,
  useChangeReviewMutation,
} = api;
