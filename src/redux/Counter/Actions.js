import { INCREMENT, DECREMENT } from "./ActionTypes";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
