import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../state/root-reducer";
import { BrowserRouter } from "react-router-dom";

export const mountWithProvider = (component, state) => {
  const initialState = {
    ...state
  };

  const store = createStore(rootReducer, initialState);

  return mount(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};
