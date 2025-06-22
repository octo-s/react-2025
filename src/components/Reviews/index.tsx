import React from "react";
import { type Restaurant as RestaurantType } from "../../types/restaurant";
import { ReviewForm } from "../ReviewForm";
import { Review } from "../Review";
import sharedStyles from "../../styles/shared.module.scss";

type ReviewsProps = {
  restaurant: RestaurantType;
  canAddReview: boolean;
};
export const Reviews: React.FC<ReviewsProps> = ({
  restaurant,
  canAddReview,
}) => {
  const { reviews, id } = restaurant;

  return (
    <>
      {reviews.length ? (
        reviews.map((review) => <Review key={review} reviewId={review} />)
      ) : (
        <div className={sharedStyles.empty}>Отзывов пока нет</div>
      )}
      {canAddReview && <ReviewForm key={id} />}
    </>
  );
};
