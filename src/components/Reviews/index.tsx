import React from "react";
import { type TRestaurant } from "../../types/restaurant";
import { ReviewForm } from "../ReviewForm";
import { Review } from "../Review";
import sharedStyles from "../../styles/shared.module.scss";

type ReviewsProps = {
  reviewIds: TRestaurant["reviews"];
  canAddReview: boolean;
};
export const Reviews: React.FC<ReviewsProps> = ({
  reviewIds,
  canAddReview,
}) => {
  return (
    <>
      {reviewIds.length ? (
        reviewIds.map((id) => <Review key={id} reviewId={id} />)
      ) : (
        <div className={sharedStyles.empty}>Отзывов пока нет</div>
      )}
      {canAddReview && <ReviewForm />}
    </>
  );
};
