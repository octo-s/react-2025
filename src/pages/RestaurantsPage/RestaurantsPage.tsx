import React from "react";
import styles from "./RestaurantsPage.module.scss";
import { Outlet } from "react-router";
import { RestaurantTab } from "../../components/RestaurantTab";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useGetRestaurantsQuery } from "../../redux/api";

export const RestaurantsPage: React.FC = () => {
  const { data: restaurants, isFetching, isError } = useGetRestaurantsQuery();

  if (isFetching || !restaurants?.length) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке ресторана" />;
  }

  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <RestaurantTab key={restaurant.id} restaurant={restaurant} />
      ))}
      <Outlet />
    </div>
  );
};
