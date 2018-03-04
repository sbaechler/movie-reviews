import React from "react";
import { mount, shallow } from "enzyme";
import MovieDetail, { MovieDetailComponent } from "./MovieDetail";
import { MovieDetailContainerComponent } from "./MovieDetailContainer";
import { fromJS } from "immutable";
import { MovieInfo } from "../../state/movies/movies-models";

describe("MovieDetail Container", () => {
  it("contains MovieDetailComponent and runs movieDetailDataReceived", () => {
    const movieDetailDataReceived = jest.fn();
    const wrapper = mount(
      <MovieDetailContainerComponent
        movieDetailDataReceived={movieDetailDataReceived}
        movie={undefined}
      />
    );

    expect(wrapper.find(MovieDetail).exists()).toEqual(true);
    expect(movieDetailDataReceived.mock.calls.length).toBe(1);
  });

  it("shows loading when movie is not defined yet", () => {
    const wrapper = mount(<MovieDetail movie={undefined} />);
    expect(wrapper.contains(<div>Loading...</div>)).toBeTruthy();
  });
});

describe("MovieDetail Component", () => {
  let movie;

  beforeEach(() => {
    movie = fromJS({
      info: new MovieInfo({
        title: "title",
        tagline: "tagline",
        overview: "overview",
        poster_path: "path",
        genres: fromJS([{ name: "genre", id: 1 }])
      })
    });
  });

  it("lists 1 genres", () => {
    const wrapper = shallow(<MovieDetailComponent movie={movie} />);
    expect(wrapper.find(".genre .label")).toHaveLength(1);
  });

  it("lists 2 genres", () => {
    movie.info.genres.push({ name: "genre2", id: 2 });
    const wrapper = shallow(<MovieDetailComponent movie={movie} />);
    expect(wrapper.find(".genre .label")).toHaveLength(2);
  });

  it("renders the passed tagline");

  it("renders image correctly");
});
