import React from "react";
import {
  INITIAL_FORM,
  MAX_RATING_VALUE,
  MAX_REVIEW_LENGTH,
  MIN_RATING_VALUE,
  useForm,
} from "./useForm";
import { CounterButtons } from "../CounterButtons";
import styles from "./ReviewForm.module.scss";
import { Button } from "../Button/Button";
import { type TReview } from "../../types/restaurant";

type TReviewFormProps = {
  onSubmitForm: (_review: Omit<TReview, "id" | "userId">) => void;
  isSubmitButtonDisabled: boolean;
  userReview?: TReview;
};

export const ReviewForm: React.FC<TReviewFormProps> = ({
  onSubmitForm,
  isSubmitButtonDisabled,
  userReview = INITIAL_FORM,
}) => {
  const initialValues = {
    text: userReview.text,
    rating: userReview.rating,
  };
  const { form, onTextChange, onRatingUp, onRatingDown, clear } =
    useForm(initialValues);

  const { text, rating } = form;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>
            Оцените от {MIN_RATING_VALUE} до {MAX_RATING_VALUE}
          </label>
          <CounterButtons
            value={rating}
            onDecrement={onRatingDown}
            onIncrement={onRatingUp}
            minCount={MIN_RATING_VALUE}
            maxCount={MAX_RATING_VALUE}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Отзыв (не более 1000 знаков)</label>
        <textarea
          value={text}
          id="text"
          rows={4}
          maxLength={MAX_REVIEW_LENGTH}
          onChange={(event) => {
            onTextChange(event.target.value);
          }}
          className={styles.input}
        />
      </div>
      <Button position="bottom" type="button" onClick={clear}>
        Очистить форму
      </Button>
      <Button
        title="Submit"
        onClick={() => onSubmitForm(form)}
        disabled={isSubmitButtonDisabled}
      >
        Отправить отзыв
      </Button>
    </form>
  );
};
