import React from "react";
import {
  MAX_RATING_VALUE,
  MAX_REVIEW_LENGTH,
  MIN_RATING_VALUE,
  useForm,
} from "./useForm";
import { CounterButtons } from "../CounterButtons";

export const ReviewForm: React.FC = () => {
  const { form, onNameChange, onTextChange, onRatingUp, onRatingDown, clear } =
    useForm();

  const { name, text, rating } = form;

  return (
    <form>
      <div>
        <label htmlFor="name">Ваше имя</label>
        <input
          value={name}
          id="name"
          onChange={(event) => {
            onNameChange(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="text">Отзыв (не более 1000 знаков)</label>
        <textarea
          value={text}
          id="text"
          maxLength={MAX_REVIEW_LENGTH}
          onChange={(event) => {
            onTextChange(event.target.value);
          }}
        />
      </div>
      <div>
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
      <button type="button" onClick={clear}>
        clear
      </button>
    </form>
  );
};
