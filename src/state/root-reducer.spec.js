import { fromJS } from "immutable";
import * as matchers from "jest-immutable-matchers";
import rootReducer from "./root-reducer";

describe("Root Reducer", () => {
  beforeEach(function() {
    jest.addMatchers(matchers);
  });

  it("reduces", () => {
    const state = rootReducer();

    const expectedState = fromJS({
      user: { username: "Simon" },
      movies: {
        overviews: {},
        displayList: [],
        details: {},
        activeMovie: undefined
      }
    });

    expect(state).toEqualImmutable(expectedState);
  });
});
