export default {
  movies: state =>
    state
      .getIn(["movies", "displayList"])
      .map(id => state.getIn(["movies", "overviews", id])),
  movie: (state, id) => state.getIn(["movies", "details", id])
};
