import type { Review as ReviewType } from "../../types/restaurant";
import React from "react";
import styles from "./Review.module.scss";

type ReviewProps = {
  review: ReviewType;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const { user, rating, text } = review;

  return (
    <div className={styles.review}>
      <h4>
        {user} - {rating} stars
      </h4>
      <p>{text}</p>
    </div>
  );
};
