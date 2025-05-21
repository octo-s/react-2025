import type { Review as ReviewType } from "../../types/restaurant";
import React from "react";

type ReviewProps = {
  review: ReviewType;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const { user, rating, text } = review;

  return (
    <>
      <h4>
        {user} - {rating} stars
      </h4>
      <>{text}</>
    </>
  );
};
