import * as actions from "./movies-actions";

describe("Movies Action Creators", () => {
  const movies = [{ id: 1 }];
  it("function movieDataReceived works properly", () => {
    const expected = {
      type: actions.MOVIE_DATA_RECEIVED,
      payload: { movies: movies }
    };
    expect(actions.movieDataReceived(movies)).toEqual(expected);
  });

  it("function movieDetailDataReceived works properly", () => {
    const expected = {
      type: actions.MOVIE_DETAIL_DATA_RECEIVED,
      payload: { movie: {}, id: 1 }
    };
    expect(actions.movieDetailDataReceived(1, {})).toEqual(expected);
  });
});
