import React from "react";
import userReducer from "./user-reducers";

describe("user-reducer", () => {
  const reducer = userReducer();
  it('expects username to be "Simon" at initialState', () => {
    expect(reducer.username).toBe("Simon");
  });
});
