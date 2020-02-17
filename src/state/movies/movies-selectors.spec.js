import selectors from "./movies-selectors";
import { MovieInfo } from "./movies-models";

describe("Movie Selectors", () => {
  let state;

  beforeEach(() => {
    state = {
      movies: {
        overviews: {
          1: new MovieInfo({ id: "1" }),
          2: new MovieInfo({ id: "2" })
        },
        displayList: ["2", "1"],
        details: { 1: { id: "1" } },
        activeMovie: undefined
      }
    };
  });

  it("returns the displayList mapped to ovierviews", () => {
    const expected = ["2", "1"].map(id => new MovieInfo({ id }));
    expect(selectors.movies(state)).toEqual(expected);
  });

  it("returns single movie when given state and an id", () => {
    expect(selectors.movie(state, "1")).toEqual({ id: "1" });
  });
});
