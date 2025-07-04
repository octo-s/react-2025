import React from "react";
import { useParams } from "react-router";
import { Menu } from "../../components/Menu";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import {
  useGetDishesByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/api";

export const MenuPage: React.FC = () => {
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;
  const { isFetching: isUsersLoading } = useGetUsersQuery();

  const {
    data: menu,
    isFetching: isLoading,
    isError,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || !menu?.length || isUsersLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке меню" />;
  }

  return <Menu menu={menu} />;
};
