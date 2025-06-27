import React from "react";
import styles from "./Review.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectUserById } from "../../redux/entities/user/userSlice";
import { selectReviewById } from "../../redux/entities/review/reviewSlice";

type ReviewProps = {
  reviewId: string;
};

export const Review: React.FC<ReviewProps> = ({ reviewId }) => {
  const review = useSelector((state: RootState) =>
    selectReviewById(state, reviewId),
  );

  const user = useSelector((state: RootState) =>
    selectUserById(state, review?.userId),
  );

  return (
    <div className={styles.review}>
      <h4>
        {user?.name} - {review?.rating} stars
      </h4>
      <p>{review?.text}</p>
    </div>
  );
};
