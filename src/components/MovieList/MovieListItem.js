import React from 'react';
import { POSTER_BASE_URL, POSTER_SIZES } from '../../config/constants';

export default function MovieListEntry(props) {
  const movie = props.movie;
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    movie.poster_path
  }`;

  return(
      <div className="movie-list__entry card">
        <img src={posterPath} alt="" />
        <div className="card-section">
          <h2 className="h4">{movie.title}</h2>
        </div>
      </div>
  );
}
