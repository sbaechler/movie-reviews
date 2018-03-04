import * as actions from "./movies-actions";

const initialState = {
  overviews: {},
  displayList: [],
  details: {},
  activeMovie: undefined
};

export default function moviesReducer(state, action) {
  const payload = action.payload;

  switch (action.type) {
    case actions.MOVIE_DATA_RECEIVED:
      const overviews = payload.movies.reduce((acc, movie) => {
        acc[movie.id] = movie;
        return acc;
      }, {});

      const displayList = payload.movies.map(movie => movie.id);

      return {
        ...state,
        overviews,
        displayList
      };

    default:
      return initialState;
  }
}
