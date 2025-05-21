import React from "react";
import type { Restaurant as RestaurantType } from "../../types/restaurant";
import { Dish } from "../Dish";
import { Review } from "../Review";

type RestaurantProps = {
  restaurant: RestaurantType;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
      <h3>Отзывы</h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
};
