import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MovieDetail from "./MovieDetail";
import { moviesSelectors, moviesActions } from "../../state/movies";

export class MovieDetailContainerComponent extends PureComponent {
  componentDidMount() {
    this.props.movieDetailsRequested(this.props.match.params.id);
  }

  render() {
    return <MovieDetail movie={this.props.movie} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: moviesSelectors.movie(state, ownProps.match.params.id)
});

const actions = {
  movieDetailsRequested: moviesActions.movieDetailsRequested
};

export default connect(mapStateToProps, actions)(MovieDetailContainerComponent);
