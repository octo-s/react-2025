import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "../entities/restaurant/restaurantSlice";
import dishSlice from "../entities/dish/dishSlice";
import reviewSlice from "../entities/review/reviewSlice";
import userSlice from "../entities/user/userSlice";
import cartSlice from "../entities/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
