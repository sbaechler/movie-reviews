import userReducer from "./user-reducers";

describe("user-reducer", () => {
  const state = userReducer();
  it('expects username to be "Simon" at initialState', () => {
    expect(state.username).toBe("Simon");
  });
});
