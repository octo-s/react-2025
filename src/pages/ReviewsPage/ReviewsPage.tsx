import React, { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";
import { useParams } from "react-router";
import { Reviews } from "../../components/Reviews";
import { useSelector } from "react-redux";
import { type RootState, useAppDispatch } from "../../redux/store";
import { getReviewsByRestaurantId } from "../../redux/entities/review/get-reviews";
import { useRequest } from "../../redux/hooks/use-request";
import type { TReview } from "../../types/restaurant";
import { Loading } from "../../components/Loading";
import { ErrorMessage } from "../../components/ErrorMessage";
import { selectReviewsByRestaurantId } from "../../redux/entities/review/reviewSlice";
import { getUsers } from "../../redux/entities/user/get-users";

export const ReviewsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useContext(UserContext);
  const params = useParams<{ restaurantId: string }>();
  const restaurantId = params.restaurantId!;

  const selectReviews = useMemo(
    () => selectReviewsByRestaurantId(restaurantId),
    [restaurantId],
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const reviews = useSelector((state: RootState) => selectReviews(state));

  const { isLoading, isError } = useRequest<TReview[]>(
    getReviewsByRestaurantId,
    restaurantId as string,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorMessage message="Ошибка при загрузке отзывов" />;
  }

  return <Reviews reviews={reviews} canAddReview={!!user} />;
};
