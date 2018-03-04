import React from "react";
import { shallow } from "enzyme";
import MovieDetail from "./MovieDetail";
import { MovieDetailContainerComponent } from "./MovieDetailContainer";

describe("MovieDetailContainer", () => {
  it("contains MovieDetail and runs movieDetailDataReceived", () => {
    const movieDetailDataReceived = jest.fn();
    const wrapper = shallow(
      <MovieDetailContainerComponent
        movieDetailDataReceived={movieDetailDataReceived}
        movie={[]}
      />
    );

    expect(wrapper.contains(<MovieDetail movie={[]} />)).toEqual(true);
    expect(movieDetailDataReceived.mock.calls.length).toBe(1);
  });
});

describe("MovieDetail", () => {
  let movie;

  beforeEach(() => {
    movie = {
      info: {
        title: "title",
        tagline: "tagline",
        overview: "overview",
        poster_path: "path",
        genres: [{ name: "genre", id: 1 }]
      }
    };
  });

  it("shows loading when movie is not defined yet", () => {
    movie = undefined;
    const wrapper = shallow(<MovieDetail movie={movie} />);
    expect(wrapper.matchesElement(<div>Loading...</div>)).toBeTruthy();
  });

  it("lists 1 genres", () => {
    const wrapper = shallow(<MovieDetail movie={movie} />);
    expect(wrapper.find(".genre .label")).toHaveLength(1);
  });

  it("lists 2 genres", () => {
    movie.info.genres.push({ name: "genre2", id: 2 });
    const wrapper = shallow(<MovieDetail movie={movie} />);
    expect(wrapper.find(".genre .label")).toHaveLength(2);
  });

  it("renders the passed tagline");

  it("renders image correctly");
});
