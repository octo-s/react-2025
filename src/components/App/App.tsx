import React from "react";
import { Layout } from "../Layout";
import ThemeProvider from "../../providers/ThemeProvider";
import { UserProvider } from "../../providers/UserProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../../pages/HomePage/HomePage";
import { RestaurantPage } from "../../pages/RestaurantPage/RestaurantPage";
import { RestaurantsPage } from "../../pages/RestaurantsPage/RestaurantsPage";
import { ReviewsPage } from "../../pages/ReviewsPage/ReviewsPage";
import { MenuPage } from "../../pages/MenuPage/MenuPage";
import { DishPage } from "../../pages/DishPage/DishPage";

type AppProps = {
  title: string;
};

export const App: React.FC<AppProps> = ({ title }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout title="Food delivery" />}>
                <Route index element={<HomePage />} />
                <Route path="/dish/:dishId" element={<DishPage />} />
              </Route>

              <Route path="/restaurants" element={<Layout title={title} />}>
                <Route index element={<RestaurantsPage />} />
                <Route path=":restaurantId" element={<RestaurantsPage />}>
                  <Route element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};
