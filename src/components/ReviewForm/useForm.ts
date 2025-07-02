import { useReducer } from "react";

const SET_TEXT_ACTION = "setText";
const SET_RATING_UP_ACTION = "setRatingUp";
const SET_RATING_DOWN_ACTION = "setRatingDown";
const CLEAR_ACTION = "clear";

export type FormAction =
  | { type: "setText"; payload: string }
  | { type: "setRatingUp" }
  | { type: "setRatingDown" }
  | { type: "clear" };

type FormState = {
  text: string;
  rating: number;
};

export const MAX_RATING_VALUE = 5;
export const MIN_RATING_VALUE = 1;
export const MAX_REVIEW_LENGTH = 1000;

const INITIAL_FORM: FormState = {
  text: "",
  rating: MAX_RATING_VALUE,
};
const reducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: action.payload,
      };
    case SET_RATING_UP_ACTION:
      return {
        ...state,
        rating: Math.min(state.rating + 1, MAX_RATING_VALUE),
      };
    case SET_RATING_DOWN_ACTION:
      return {
        ...state,
        rating: Math.max(state.rating - 1, MIN_RATING_VALUE),
      };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const onTextChange = (text: FormState["text"]) => {
    if (text.length <= MAX_REVIEW_LENGTH) {
      dispatch({ type: SET_TEXT_ACTION, payload: text });
    }
  };

  const onRatingUp = () => {
    dispatch({ type: SET_RATING_UP_ACTION });
  };
  const onRatingDown = () => {
    dispatch({ type: SET_RATING_DOWN_ACTION });
  };

  const clear = () => {
    dispatch({ type: CLEAR_ACTION });
  };

  return {
    form,
    onTextChange,
    onRatingUp,
    onRatingDown,
    clear,
  };
};
