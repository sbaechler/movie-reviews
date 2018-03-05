import rootReducer from "./root-reducer";

describe("Root Reducer", () => {
  it("reduces", () => {
    const state = rootReducer();
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
