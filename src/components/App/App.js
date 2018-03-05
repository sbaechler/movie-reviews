import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MovieListContainer from "../MovieList/MovieListContainer";
import MovieDetailContainer from "../MovieDetail/MovieDetailContainer";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <BrowserRouter>
          <div>
            <Route path="/movies/:id" component={MovieDetailContainer} />
            <Route exact path="/" component={MovieListContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
