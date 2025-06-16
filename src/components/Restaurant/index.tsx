import React from "react";
import { Dish } from "../Dish";
import { Review } from "../Review";
import { ReviewForm } from "../ReviewForm";
import styles from "./Restaurant.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectRestaurantById } from "../../entities/restaurant/restaurantSlice";
import { type Restaurant as RestaurantType } from "../../types/restaurant";

type RestaurantProps = {
  restaurantId: RestaurantType["id"];
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurantId }) => {
  const restaurant =
    useSelector((state: RootState) =>
      selectRestaurantById(state, restaurantId),
    ) || {};

  const { name, menu, reviews, id } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {menu.length ? (
        menu.map((dish) => <Dish key={dish} dishId={dish} />)
      ) : (
        <div className={styles.empty}>Ресторан пока не добавил блюда</div>
      )}
      <h3>Отзывы</h3>
      {reviews.length ? (
        reviews.map((review) => <Review key={review} reviewId={review} />)
      ) : (
        <div className={styles.empty}>Отзывов пока нет</div>
      )}
      <ReviewForm key={id} />
    </div>
  );
};
