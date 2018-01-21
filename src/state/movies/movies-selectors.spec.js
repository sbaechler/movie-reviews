import React from "react";
import selectors from "./movies-selectors";

describe("Movie Selectors", () => {
  let state;

  beforeEach(() => {
    state = {
      movies: {
        overviews: { 1: { id: 1 }, 2: { id: 2 } },
        displayList: [1, 2],
        details: { 1: { id: 1 } },
        activeMovie: undefined
      }
    };
  });

  it("returns the displayList mapped to ovierviews", () => {
    expect(selectors.movies(state)).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it("returns single movie when given state and an id", () => {
    expect(selectors.movie(state, 1)).toEqual({ id: 1 });
  });
});
