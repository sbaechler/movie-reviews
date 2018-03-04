import rootReducer from "./root-reducer";

describe("Root Reducer", () => {
  it("reduces", () => {
    let state;
    state = rootReducer(
      {
        user: { username: "Simon" },
        movies: { overviews: {}, displayList: [] }
      },
      {
        type: "MOVIE DATA RECEIVED",
        payload: {
          movies: [
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
            }
          ]
        }
      }
    );
    expect(state).toEqual({
      user: { username: "Simon" },
      movies: {
        overviews: {
          "346364": {
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
          }
        },
        displayList: [346364]
      }
    });
  });
});
