import axios from "axios";
import { all } from "redux-saga/effects";
import moviesSaga from "./movies/movies-sagas";

export default function* rootSaga() {
  yield all([moviesSaga(axios)]);
}
