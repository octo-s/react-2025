import React from "react";
import styles from "./RestaurantsPage.module.scss";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { RestaurantTab } from "../../components/RestaurantTab";
import { useEmptyRequest } from "../../redux/hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurantSlice";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import { type TRestaurant } from "../../types/restaurant";

export const RestaurantsPage: React.FC = () => {
  const restaurants = useSelector(selectRestaurantIds);
  const { isLoading, isError } = useEmptyRequest<TRestaurant[]>(getRestaurants);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке ресторана" />;
  }

  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <RestaurantTab key={restaurant} id={restaurant} />
      ))}
      <Outlet />
    </div>
  );
};
