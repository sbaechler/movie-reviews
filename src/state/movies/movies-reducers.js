import { fromJS, Map } from "immutable";
import * as actions from "./movies-actions";
import { MovieInfo } from "./movies-models";

export const initialState = fromJS({
  overviews: {},
  displayList: [],
  details: {},
  activeMovie: undefined
});

export default function moviesReducer(state = initialState, action = {}) {
  const payload = action.payload;

  switch (action.type) {
    case actions.MOVIE_DATA_RECEIVED: {
      // convert the movie Array to a Immutable List
      const movies = fromJS(payload.movies)
        // Create Movie Record instances from the payload.
        .map(movie => new MovieInfo(movie));

      // Create the id mapped object
      const overviews = movies.reduce((acc, movie) => {
        return acc.set(movie.id, movie);
      }, Map());

      const displayList = movies.map(movie => movie.id);

      return state.set("overviews", overviews).set("displayList", displayList);
    }
    case actions.MOVIE_DETAIL_DATA_RECEIVED:
      const movieInfo = new MovieInfo(fromJS(payload.movie.info));
      return state.setIn(
        ["details", payload.id],
        fromJS({
          info: movieInfo,
          reviews: payload.movie.reviews
        })
      );

    default:
      return state;
  }
}
