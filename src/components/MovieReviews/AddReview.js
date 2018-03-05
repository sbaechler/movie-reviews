import React, { Component } from "react";
import { moviesActions } from "../../state/movies";
import { connect } from "react-redux";
import { userSelectors } from "../../state/user";

export class AddReviewComponent extends Component {
  state = {
    text: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const now = new Date();
    this.props.submitReviewRequested(
      this.props.movieId,
      this.state.text,
      this.props.username,
      now.toISOString(),
      now.toString()
    );
    this.setState({
      text: ""
    });
  };

  onChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div className="reviews__add">
        <form onSubmit={this.onSubmit} noValidate>
          <label>
            Write a review
            <textarea onChange={this.onChange} value={this.state.text} />
          </label>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const actions = {
  submitReviewRequested: moviesActions.submitReviewRequested
};

const mapStateToProps = state => ({
  username: userSelectors.username(state)
});

export default connect(mapStateToProps, actions)(AddReviewComponent);
