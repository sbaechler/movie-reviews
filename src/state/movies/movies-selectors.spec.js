import { fromJS, List, Map } from "immutable";
import * as matchers from "jest-immutable-matchers";
import selectors from "./movies-selectors";
import { MovieInfo } from "./movies-models";

describe("Movie Selectors", () => {
  let state;

  beforeEach(() => {
    jest.addMatchers(matchers);
    state = fromJS({
      movies: {
        overviews: {
          1: new MovieInfo({ id: "1" }),
          2: new MovieInfo({ id: "2" })
        },
        displayList: ["2", "1"],
        details: { 1: { id: "1" } },
        activeMovie: undefined
      }
    });
  });

  it("returns the displayList mapped to ovierviews", () => {
    const expected = List(["2", "1"]).map(id => new MovieInfo({ id }));
    expect(selectors.movies(state)).toEqualImmutable(expected);
  });

  it("returns single movie when given state and an id", () => {
    expect(selectors.movie(state, "1")).toEqualImmutable(Map({ id: "1" }));
  });
});
