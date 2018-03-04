export const MOVIE_DATA_RECEIVED = "MOVIE DATA RECEIVED";

export const movieDataReceived = movies => ({
  type: MOVIE_DATA_RECEIVED,
  payload: { movies: movies }
});
