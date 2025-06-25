import type { TReview } from "../../types/restaurant";
import React from "react";
import styles from "./Review.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { selectUserById } from "../../redux/entities/user/userSlice";

type ReviewProps = {
  review: TReview;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const { userId, rating, text } = review;

  const user = useSelector((state: RootState) => selectUserById(state, userId));

  return (
    <div className={styles.review}>
      <h4>
        {user.name} - {rating} stars
      </h4>
      <p>{text}</p>
    </div>
  );
};
