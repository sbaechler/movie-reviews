import React from "react";
import AddReview from "./AddReview";

export default function MovieReviews(props) {
  const reviews = props.reviews.map(review => {
    const dateString = review.publication_date
      ? new Date(review.publication_date).toLocaleDateString()
      : "just now";

    return (
      <li key={review.id}>
        <h4>
          {review.author} <small>{dateString}</small>
        </h4>
        <p>{review.content}</p>
      </li>
    );
  });

  return (
    <div className="reviews">
      <ul className="reviews__list no-bullet">{reviews}</ul>
      <AddReview movieId={props.movieId} />
    </div>
  );
}
