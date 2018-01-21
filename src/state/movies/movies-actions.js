export const MOVIE_DATA_RECEIVED = "MOVIE DATA RECEIVED";

export const movieDataReceived = movies => ({
  type: MOVIE_DATA_RECEIVED,
  payload: { movies: movies }
});

export const MOVIE_DETAIL_DATA_RECEIVED = "MOVIE DETAIL DATA RECEIVED";
export const movieDetailDataReceived = (id, movie) => ({
  type: MOVIE_DETAIL_DATA_RECEIVED,
  payload: { movie, id }
});
