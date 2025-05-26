import React from "react";
import type { Restaurant as RestaurantType } from "../../types/restaurant";
import { Dish } from "../Dish";
import { Review } from "../Review";
import { ReviewForm } from "../ReviewForm";

type RestaurantProps = {
  restaurant: RestaurantType;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const { name, menu, reviews, id } = restaurant;

  return (
    <>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {menu.length ? (
        menu.map((dish) => <Dish key={dish.id} dish={dish} />)
      ) : (
        <>Ресторан пока не добавил блюда</>
      )}
      <h3>Отзывы</h3>
      {reviews.length ? (
        reviews.map((review) => <Review key={review.id} review={review} />)
      ) : (
        <>Отзывов пока нет</>
      )}
      <ReviewForm key={id} />
    </>
  );
};
