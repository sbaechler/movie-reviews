import React, { Component } from "react";
import MovieListContainer from "../MovieList/MovieListContainer";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <MovieListContainer />
      </div>
    );
  }
}

export default App;
