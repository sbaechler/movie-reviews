import React from "react";
import { Link } from "react-router-dom";
import { POSTER_BASE_URL, POSTER_SIZES } from "../../config/constants";

export default function MovieListEntry(props) {
  const movie = props.movie;
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    movie.poster_path
  }`;

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-list__entry card">
        <img src={posterPath} alt="" />
        <div className="card-section">
          <h2 data-test-id="title-text" className="h4">
            {movie.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
