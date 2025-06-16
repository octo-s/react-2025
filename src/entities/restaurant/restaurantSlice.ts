import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../data/normalized-mock";
import { type Restaurant } from "../../types/restaurant";

type RestaurantEntities = {
  [id: string]: Restaurant;
};

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce<RestaurantEntities>(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;

      return acc;
    },
    {},
  ),
};
const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } =
  restaurantSlice.selectors;
export default restaurantSlice;
