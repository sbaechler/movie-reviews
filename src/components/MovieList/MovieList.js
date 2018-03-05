import React from "react";
import MovieListItem from "./MovieListItem";
import { toJS } from "../toJS";

export function renderMovies(movies) {
  return movies.map(movie => (
    <div className="cell" key={movie.id}>
      <MovieListItem movie={movie} />
    </div>
  ));
}

export function MovieListComponent(props) {
  const movies = renderMovies(props.movies);

  return (
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

export default toJS(MovieListComponent);
