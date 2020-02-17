import userSelector from "./user-selectors";

describe("User Selectors", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      user: {
        username: "Simon"
      }
    };
  });

  it('expects user to be "Simon"', () => {
    expect(userSelector.username(initialState)).toEqual("Simon");
  });
});
