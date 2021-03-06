import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../state/root-reducer";
import { BrowserRouter } from "react-router-dom";

export const mountWithProvider = (Component, state) => {
  const store = createStore(rootReducer, state);

  return mount(
    <Provider store={store}>
      <BrowserRouter>{Component}</BrowserRouter>
    </Provider>
  );
};
