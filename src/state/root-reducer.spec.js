import rootReducer from "./root-reducer";

describe("Root Reducer", () => {
  it("reduces", () => {
    let state;
    state = rootReducer();
    expect(state).toEqual({
      user: { username: "Simon" },
      movies: {
        overviews: {},
        displayList: [],
        details: {},
        activeMovie: undefined
      }
    });
  });
});
