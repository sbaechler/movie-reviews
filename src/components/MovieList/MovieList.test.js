import React from "react";
import MovieList from "./MovieList";
import MovieListEntry from "./MovieListEntry";
import { shallow } from "enzyme";
import ConnectedMovieListContainer, {
  MovieListContainer
} from "./MovieListContainer";
import { mountWithProvider } from "../../utils/mountWithProvider";

describe("MovieListContainer", () => {
  it("contains MovieList and calls movieDataReceived", () => {
    const movieDataReceived = jest.fn();
    const wrapper = shallow(
      <MovieListContainer movieDataReceived={movieDataReceived} movies={[]} />
    );
    expect(wrapper.contains(<MovieList movies={[]} />)).toEqual(true);
    expect(movieDataReceived.mock.calls.length).toBe(1);
  });

  it("MovieList calls componentDidMount", () => {
    const spy = jest.spyOn(MovieListContainer.prototype, "componentDidMount");
    shallow(<MovieListContainer movieDataReceived={jest.fn()} movies={[]} />);
    expect(spy).toHaveBeenCalled();
  });
});

describe("MovieList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<MovieList movies={[]} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders 0 items when movies are empty", () => {
    const wrapper = shallow(<MovieList movies={[]} />);
    expect(wrapper.find(".cell")).toHaveLength(0);
  });

  it("renders 2 items when movies are empty", () => {
    const movies = [
      {
        vote_count: 5269,
        id: 346364,
        video: false,
        vote_average: 7.2,
        title: "It",
        popularity: 715.326636,
        poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        original_language: "en",
        original_title: "It",
        genre_ids: [53, 18, 27, 14],
        backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
        adult: false,
        overview:
          "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
        release_date: "2017-09-05"
      },
      {
        vote_count: 2507,
        id: 181808,
        video: false,
        vote_average: 7.3,
        title: "Star Wars: The Last Jedi",
        popularity: 645.627342,
        poster_path: "/xGWVjewoXnJhvxKW619cMzppJDQ.jpg",
        original_language: "en",
        original_title: "Star Wars: The Last Jedi",
        genre_ids: [28, 12, 14, 878],
        backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
        adult: false,
        overview:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        release_date: "2017-12-13"
      }
    ];
    const wrapper = shallow(<MovieList movies={movies} />);
    expect(wrapper.find(MovieListEntry)).toHaveLength(2);
  });
});

describe("MovieListEntry", () => {
  it("renders the title correctly", () => {
    const movieTitle = "Test Movie";
    const movie = {
      title: movieTitle,
      poster_path: ""
    };
    const wrapper = shallow(<MovieListEntry movie={movie} />);
    expect(wrapper.find('[data-test-id="title-text"]').text()).toEqual(
      movieTitle
    );
  });
});

describe("MovieListContainer", () => {
  it("renders correctly with Store", () => {
    const wrapper = mountWithProvider(<ConnectedMovieListContainer />);
    expect(wrapper.find(MovieListEntry)).toHaveLength(20);
  });
});
