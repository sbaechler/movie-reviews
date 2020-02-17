import * as actions from "./movies-actions";
import movieReducer, { initialState } from "./movies-reducers";

describe("Movies Reducers", () => {
  let movies;

  beforeEach(() => {
    movies = [
      {
        id: 346364
      }
    ];
  });

  it("has initialState set", () => {
    expect(movieReducer(undefined, { type: null})).toEqual(initialState);
  });

  it("dispatches " + actions.MOVIE_DATA_RECEIVED, () => {
    const action = {
      type: actions.MOVIE_DATA_RECEIVED,
      payload: { movies: movies }
    };
    const expected = movieReducer({
      displayList: [346364],
      overviews: {
        '346364': {id: 346364},
      }
    }, { type: null })

    expect(movieReducer(initialState, action)).toEqual(expected);
  });

  it("dispatches " + actions.MOVIE_DETAIL_DATA_RECEIVED, () => {
    const action = {
      type: actions.MOVIE_DETAIL_DATA_RECEIVED,
      payload: { movie: { info: { id: 1 }, reviews: [] }, id: 1 }
    };

    const expected = movieReducer({
      details: {
        1: {
          info: { id: 1 },
          reviews: [],
        }
      }
    }, { type: null })

    expect(movieReducer(initialState, action)).toEqual(expected);
  });
});
