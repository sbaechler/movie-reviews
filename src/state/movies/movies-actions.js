export const MOVIES_REQUESTED = "MOVIES REQUESTED";
export const moviesRequested = () => ({ type: MOVIES_REQUESTED });

export const MOVIE_DATA_RECEIVED = "MOVIE DATA RECEIVED";
export const movieDataReceived = movies => ({
  type: MOVIE_DATA_RECEIVED,
  payload: { movies: movies }
});

export const MOVIE_DETAILS_REQUESTED = "MOVIE DETAILS REQUESTED";
export const movieDetailsRequested = id => ({
  type: MOVIE_DETAILS_REQUESTED,
  payload: { id }
});

export const MOVIE_DETAIL_DATA_RECEIVED = "MOVIE DETAIL DATA RECEIVED";
export const movieDetailDataReceived = (id, movie) => ({
  type: MOVIE_DETAIL_DATA_RECEIVED,
  payload: { movie, id }
});

export const MOVIE_LOAD_ERROR = "MOVIE LOAD ERROR";
export const movieLoadError = (error, payload) => ({
  type: MOVIE_LOAD_ERROR,
  payload,
  error
});

export const SUBMIT_REVIEW_REQUESTED = "SUBMIT REVIEW REQUESTED";
export const submitReviewRequested = (
  movieId,
  content,
  author,
  publication_date,
  placeholderId
) => ({
  type: SUBMIT_REVIEW_REQUESTED,
  payload: { movieId, content, author, publication_date, placeholderId }
});

export const SUBMIT_REVIEW_SUCCESS = "SUBMIT REVIEW SUCCESS";
export const submitReviewSuccess = (review, placeholderId) => ({
  type: SUBMIT_REVIEW_SUCCESS,
  payload: { review, placeholderId }
});

export const SUBMIT_REVIEW_ERROR = "SUBMIT REVIEW ERROR";
export const submitReviewError = (error, payload) => ({
  type: SUBMIT_REVIEW_ERROR,
  payload
});
