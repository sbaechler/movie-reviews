import React from "react";
import userSelector from "./user-selectors";

describe("User Selectors", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      user: "Simon"
    };
  });
  it('expects user to be "Simon"', () => {
    expect(userSelector.user(initialState)).toEqual("Simon");
  });
});
