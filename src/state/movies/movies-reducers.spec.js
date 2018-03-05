import * as actions from "./movies-actions";
import movieReducer from "./movies-reducers";

describe("Movies Reducers", () => {
  let initialState;
  let movies;

  beforeEach(() => {
    initialState = {
      overviews: {},
      displayList: [],
      details: {},
      activeMovie: undefined
    };
    movies = [
      {
        id: 346364
      }
    ];
  });

  it("has initialState set", () => {
    expect(movieReducer()).toEqual(initialState);
  });

  it("dispatches " + actions.MOVIE_DATA_RECEIVED, () => {
    const action = {
      type: actions.MOVIE_DATA_RECEIVED,
      payload: { movies: movies }
    };
    const expected = {
      ...initialState,
      displayList: [346364],
      overviews: {
        "346364": {
          id: 346364
        }
      }
    };
    expect(movieReducer(initialState, action)).toEqual(expected);
  });

  it("dispatches " + actions.MOVIE_DETAIL_DATA_RECEIVED, () => {
    const action = {
      type: actions.MOVIE_DETAIL_DATA_RECEIVED,
      payload: { movie: "foo", id: "1" }
    };
    const expected = {
      ...initialState,
      details: { "1": "foo" }
    };
    expect(movieReducer(initialState, action)).toEqual(expected);
  });
});
