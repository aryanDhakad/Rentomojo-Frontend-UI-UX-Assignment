import { combineReducers } from "redux";
import PostReducer from "./Post/Reducer";
import CountReducer from "./Counter/Reducer";

const rootReducer = combineReducers({
  post: PostReducer,
  count: CountReducer,
});

export default rootReducer;
