import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { useParams } from "react-router";
import { Reviews } from "../../components/Reviews";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import {
  useAddReviewMutation,
  useChangeReviewMutation,
  useGetRestaurantByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../../redux/api";
import { type TReview } from "../../types/restaurant";

export const ReviewsPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const { data: restaurant } = useGetRestaurantByIdQuery(restaurantId);
  const { isFetching: isUsersLoading } = useGetUsersQuery();

  const {
    data: reviews,
    isFetching: isReviewsLoading,
    isError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const hasData = reviews?.length && restaurant;
  const userReview = reviews?.find((review) => review.userId === user?.id);

  const [addReviewMutation, { isLoading: isNewReviewLoading }] =
    useAddReviewMutation();
  const [changeReviewMutation, { isLoading: isChangeReviewLoading }] =
    useChangeReviewMutation();
  const isLoading = userReview ? isChangeReviewLoading : isNewReviewLoading;

  const handleAddReview = (review: Omit<TReview, "id" | "userId">) => {
    if (userReview) {
      changeReviewMutation({
        reviewId: userReview.id,
        review: { ...review, userId: user!.id },
      });

      return;
    }

    addReviewMutation({
      restaurantId,
      review: { ...review, userId: user!.id },
    });
  };

  if (isReviewsLoading || isUsersLoading || !hasData) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке отзывов" />;
  }

  return (
    <Reviews
      reviews={reviews}
      canAddReview={!!user}
      addReview={handleAddReview}
      isSubmitButtonDisabled={isLoading}
    />
  );
};
