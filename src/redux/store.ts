import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./entities/restaurant/restaurantSlice";
import dishSlice from "./entities/dish/dishSlice";
import reviewSlice from "./entities/review/reviewSlice";
import userSlice from "./entities/user/userSlice";
import cartSlice from "./entities/cart/cartSlice";
import requestSlice from "./entities/request/requestSlice";
import { useDispatch } from "react-redux";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
