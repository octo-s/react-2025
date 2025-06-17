import type { Review as ReviewType } from "../../types/restaurant";
import React from "react";
import styles from "./Review.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectReviewById } from "../../entities/review/reviewSlice";
import { selectUserById } from "../../entities/user/userSlice";

type ReviewProps = {
  reviewId: ReviewType["id"];
};

export const Review: React.FC<ReviewProps> = ({ reviewId }) => {
  const review =
    useSelector((state: RootState) => selectReviewById(state, reviewId)) || {};

  const { userId, rating, text } = review;
  const user =
    useSelector((state: RootState) => selectUserById(state, userId)) || {};

  return (
    <div className={styles.review}>
      <h4>
        {user.name} - {rating} stars
      </h4>
      <p>{text}</p>
    </div>
  );
};
