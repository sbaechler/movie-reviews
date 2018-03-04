import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./state";
import "./styles/index.scss";
import App from "./components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
