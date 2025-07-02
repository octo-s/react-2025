import React from "react";
import type { TReview } from "../../types/restaurant";
import { ReviewForm } from "../ReviewForm";
import { Review } from "../Review";
import sharedStyles from "../../styles/shared.module.scss";

type ReviewsProps = {
  reviews: TReview[];
  canAddReview: boolean;
  addReview: (_review: Omit<TReview, "id" | "userId">) => void;
  isSubmitButtonDisabled: boolean;
};
export const Reviews: React.FC<ReviewsProps> = ({
  reviews,
  canAddReview,
  addReview,
  isSubmitButtonDisabled,
}) => {
  return (
    <>
      {reviews.length ? (
        reviews.map((review) => <Review key={review.id} review={review} />)
      ) : (
        <div className={sharedStyles.empty}>Отзывов пока нет</div>
      )}
      {canAddReview && (
        <ReviewForm
          onSubmitForm={addReview}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
        />
      )}
    </>
  );
};
