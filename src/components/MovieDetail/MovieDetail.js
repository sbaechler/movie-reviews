import React from "react";
import { Link } from "react-router-dom";
import { POSTER_BASE_URL, POSTER_SIZES } from "../../config/constants";
import { toJS } from "../toJS";

export function MovieDetailComponent(props) {
  if (!props.movie) {
    return <div>Loading...</div>;
  }

  const movieInfo = props.movie.info;
  const posterPath = `${POSTER_BASE_URL}/${POSTER_SIZES["342"]}/${
    movieInfo.poster_path
  }`;

  const genres = movieInfo.genres.map(genre => (
    <span className="genre label" key={genre.id}>
      {genre.name}
    </span>
  ));

  return (
    <div>
      <Link to="/">&lt; Back to List</Link>
      <div>
        <h1>
          {movieInfo.title}
          <br />
          <small>{movieInfo.tagline}</small>
        </h1>
        <p>{movieInfo.overview}</p>
        <p>{genres}</p>
        <img src={posterPath} alt="" />
      </div>
    </div>
  );
}

export default toJS(MovieDetailComponent);
