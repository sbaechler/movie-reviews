import React, { PureComponent } from "react";
import { connect } from "react-redux";
import movieData from "../../__fixtures__/movies.json";
import MovieList from "./MovieList";
import { moviesSelectors, moviesActions } from "../../state/movies";

class MovieListContainer extends PureComponent {
  componentDidMount() {
    this.props.movieDataReceived(movieData.results);
  }

  render() {
    return <MovieList movies={this.props.movies} />;
  }
}

const mapStateToProps = state => ({
  movies: moviesSelectors.movies(state)
});

const actions = {
  movieDataReceived: moviesActions.movieDataReceived
};

export default connect(mapStateToProps, actions)(MovieListContainer);
