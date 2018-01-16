import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';

import mockData from '../../__fixtures__/movies.json';

const movies = mockData.results;

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
