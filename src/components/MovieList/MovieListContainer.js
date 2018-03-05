import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import { moviesSelectors, moviesActions } from "../../state/movies";

export class MovieListContainerComponent extends PureComponent {
  componentDidMount() {
    this.props.moviesRequested();
  }

  render() {
    return <MovieList movies={this.props.movies} />;
  }
}

const mapStateToProps = state => ({
  movies: moviesSelectors.movies(state)
});

const actions = {
  moviesRequested: moviesActions.moviesRequested
};

export default connect(mapStateToProps, actions)(MovieListContainerComponent);
