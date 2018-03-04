import { combineReducers } from "redux-immutable";
import { usersReducer } from "./user";
import { movieReducer } from "./movies";

const rootReducer = combineReducers({
  user: usersReducer,
  movies: movieReducer
});

export default rootReducer;
