import React, { Component } from 'react';
import MovieListEntry from './MovieListEntry';

export default class MovieList extends Component {

  render() {
    const movies = this.props.movies.map(movie =>
      (
        <div className="cell" key={movie.id}>
          <MovieListEntry  movie={movie} />
        </div>
      )
    );

    return(
      <div>
        <header>
          <h1>Recent Movies</h1>
        </header>
        <main className="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4">
          {movies}
        </main>
      </div>
    );
  }
}
