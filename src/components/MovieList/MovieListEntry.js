import React from 'react';

export default function MovieListEntry(props) {

  const movie = props.movie;

  return(
      <div className="movie-list__entry">{movie.title}</div>
  );
}
