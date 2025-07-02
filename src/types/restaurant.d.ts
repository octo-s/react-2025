export type TRestaurant = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
};

export type TDish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type TReview = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type TNewReviewData = {
  restaurantId: string;
  review: Omit<TReview, "id">;
};

export type TReviewData = {
  reviewId: string;
  review: Omit<TReview, "id">;
};
