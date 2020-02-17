import * as actions from "./movies-actions";
import { MovieInfo } from "./movies-models";
import {produce} from "immer";

export const initialState = {
  overviews: {},
  displayList: [],
  details: {},
  activeMovie: undefined
};

export default function moviesReducer(state = initialState, { payload, type } = {}) {
  switch (type) {
    case actions.MOVIE_DATA_RECEIVED: {
      // convert the movie Array to a Immutable List
      const movies = payload.movies

      // Create the id mapped object
      const overviews = movies.reduce((acc, movie) => {
        acc[movie.id] = movie;

        return acc;
      }, {});

      const displayList = movies.map(movie => movie.id);

      return {
        ...state,
        overviews,
        displayList,
      };
    }

    case actions.MOVIE_DETAIL_DATA_RECEIVED: {
      const movieInfo = new MovieInfo(payload.movie.info);

      return {
        ...state,
        details: {
          [payload.id]: {
            info: movieInfo,
            reviews: payload.movie.reviews,
          }
        }
      };
    }


    case actions.SUBMIT_REVIEW_REQUESTED:
      return produce(state, (draft) => {
        draft.details[payload.movieId].reviews.push({
          ...payload, id: payload.placeholderId,
        })
      })

    case actions.SUBMIT_REVIEW_SUCCESS: {
      const review = payload.review;

      return produce(state, (draft) => {
        draft.details[review.movieId].reviews = draft.details[review.movieId].reviews
          .filter(r => r.id !== payload.placeholderId)
          .push(review)
      });
    }

    case actions.SUBMIT_REVIEW_ERROR: {
      return produce(state, (draft) => {
        draft.details[payload.review.movieId].reviews = draft.details[payload.review.movieId].reviews
          .filter(r => r.get("id") !== payload.placeholderId)
      })
    }

    default:
      return state;
  }
}
