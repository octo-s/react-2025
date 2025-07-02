import React from "react";
import styles from "./Review.module.scss";
import { type TReview } from "../../types/restaurant";
import { useGetUsersQuery } from "../../redux/api";

type ReviewProps = {
  review: TReview;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === review?.userId),
    }),
  });

  return (
    <div className={styles.review}>
      <h4>
        {user?.name} - {review?.rating} stars
      </h4>
      <p>{review?.text}</p>
    </div>
  );
};
