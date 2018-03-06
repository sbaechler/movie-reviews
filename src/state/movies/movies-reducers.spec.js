import { Map, List } from "immutable";
import * as matchers from "jest-immutable-matchers";
import * as actions from "./movies-actions";
import movieReducer, { initialState } from "./movies-reducers";
import { MovieInfo } from "./movies-models";

describe("Movies Reducers", () => {
  let movies;

  beforeEach(() => {
    jest.addMatchers(matchers);

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
    const expected = initialState.mergeDeep({
      displayList: [346364],
      overviews: Map().set(
        346364,
        new MovieInfo({
          id: 346364
        })
      )
    });
    expect(movieReducer(initialState, action)).toEqualImmutable(expected);
  });

  it("dispatches " + actions.MOVIE_DETAIL_DATA_RECEIVED, () => {
    const action = {
      type: actions.MOVIE_DETAIL_DATA_RECEIVED,
      payload: { movie: { info: { id: 1 }, reviews: [] }, id: 1 }
    };
    const expected = initialState.setIn(
      ["details", 1],
      new Map({
        info: new MovieInfo({ id: 1 }),
        reviews: List()
      })
    );
    expect(movieReducer(initialState, action)).toEqualImmutable(expected);
  });
});
