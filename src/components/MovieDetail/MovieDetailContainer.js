import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MovieDetail from "./MovieDetail";
import movieDetailData from "../../__fixtures__/star-wars.json";
import { moviesSelectors, moviesActions } from "../../state/movies";

class MovieDetailContainer extends PureComponent {
  componentDidMount() {
    this.props.movieDetailDataReceived("181808", movieDetailData);
  }

  render() {
    return <MovieDetail movie={this.props.movie} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  movie: moviesSelectors.movie(state, ownProps.match.params.id)
});

const actions = {
  movieDetailDataReceived: moviesActions.movieDetailDataReceived
};

export default connect(mapStateToProps, actions)(MovieDetailContainer);
