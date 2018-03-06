import * as sagas from "./movies-sagas";
import { expectSaga } from "redux-saga-test-plan";
import { BACKEND_URL } from "../../config/constants";
import * as actions from "./movies-actions";

describe("Movie Sagas", () => {
  let api;
  const error = new Error("boom");
  const OK = "OK";

  beforeEach(() => {
    api = jest.fn();
  });

  describe("loadMovies", () => {
    it("can load movies", () => {
      api.mockReturnValue(Promise.resolve({ data: OK }));

      return expectSaga(sagas.loadMovies, api)
        .call(api, `${BACKEND_URL}/movies`)
        .put(actions.movieDataReceived(OK))
        .run();
    });

    it("sends the error action on a failed request", () => {
      api.mockReturnValue(Promise.reject(error));

      return expectSaga(sagas.loadMovies, api)
        .call(api, `${BACKEND_URL}/movies`)
        .put(actions.movieLoadError(error))
        .run();
    });
  });

  describe("loadMovieDetails", () => {
    it("can load movie details", () => {
      const id = 42;
      const action = actions.movieDetailsRequested(id);
      api.mockReturnValue(Promise.resolve({ data: OK }));

      return expectSaga(sagas.loadMovieDetails, api, action)
        .call(api, `${BACKEND_URL}/movies/${id}`)
        .put(actions.movieDetailDataReceived(id, OK))
        .run();
    });

    it("sends the error action on a failed request", () => {
      const id = 42;
      api.mockReturnValue(Promise.reject(error));
      const action = actions.movieDetailsRequested(id);

      return expectSaga(sagas.loadMovieDetails, api, action)
        .call(api, `${BACKEND_URL}/movies/${id}`)
        .put(actions.movieLoadError(error, { id }))
        .run();
    });
  });

  describe("submitMovieReview", () => {
    const movieId = "movieId";
    const content = "Text";
    const author = "me";
    const publication_date = Date.now();
    const placeholderId = "123";
    const action = actions.submitReviewRequested(
      movieId,
      content,
      author,
      publication_date,
      placeholderId
    );

    it("can submit a review", () => {
      api.mockReturnValue(Promise.resolve({ data: OK }));

      return expectSaga(sagas.submitMovieReview, api, action)
        .call(api, `${BACKEND_URL}/movies/${movieId}/reviews`, action.payload)
        .put(actions.submitReviewSuccess(OK, placeholderId))
        .run();
    });

    it("sends the error action on a failed request", () => {
      api.mockReturnValue(Promise.reject(error));

      return expectSaga(sagas.submitMovieReview, api, action)
        .call(api, `${BACKEND_URL}/movies/${movieId}/reviews`, action.payload)
        .put(actions.submitReviewError(error, action.payload))
        .run();
    });
  });
});
