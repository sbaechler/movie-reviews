import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { BACKEND_URL } from "../../config/constants";
import * as actions from "./movies-actions";

export function* loadMovies(get) {
  try {
    const movies = yield call(get, `${BACKEND_URL}/movies`);
    yield put(actions.movieDataReceived(movies.data));
  } catch (error) {
    yield put(actions.movieLoadError, error);
  }
}

export function* loadMovieDetails(get, action) {
  const { id } = action.payload;
  try {
    const movie = yield call(get, `${BACKEND_URL}/movies/${id}`);
    yield put(actions.movieDetailDataReceived(id, movie.data));
  } catch (error) {
    yield put(actions.movieLoadError, error, { id });
  }
}

export function* submitMovieReview(post, action) {
  try {
    const response = yield call(
      post,
      `${BACKEND_URL}/movies/${action.payload.movieId}/reviews`,
      action.payload
    );
    yield put(
      actions.submitReviewSuccess(response.data, action.payload.placeholderId)
    );
  } catch (error) {
    yield put(actions.submitReviewError(error, action.payload));
  }
}

export default function* moviesSaga() {
  yield takeLatest(actions.MOVIES_REQUESTED, loadMovies, axios.get);
  yield takeLatest(
    actions.MOVIE_DETAILS_REQUESTED,
    loadMovieDetails,
    axios.get
  );
  yield takeLatest(
    actions.SUBMIT_REVIEW_REQUESTED,
    submitMovieReview,
    axios.post
  );
}
