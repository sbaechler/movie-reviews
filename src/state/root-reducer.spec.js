import rootReducer from "./root-reducer";

describe("Root Reducer", () => {
  it("reduces", () => {
    const state = rootReducer();

    const expectedState = {
      user: { username: "Simon" },
      movies: {
        overviews: {},
        displayList: [],
        details: {},
        activeMovie: undefined
      }
    };

    expect(state).toEqual(expectedState);
  });
});
