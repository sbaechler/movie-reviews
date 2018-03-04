import userSelector from "./user-selectors";
import { fromJS } from "immutable";

describe("User Selectors", () => {
  let initialState;
  beforeEach(() => {
    initialState = fromJS({
      user: {
        username: "Simon"
      }
    });
  });
  it('expects user to be "Simon"', () => {
    expect(userSelector.username(initialState)).toEqual("Simon");
  });
});
