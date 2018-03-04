import { List, Record } from "immutable";

export const MovieInfo = Record({
  id: undefined,
  title: undefined,
  poster_path: undefined,
  genre_ids: List(),
  genres: List(), // Maybe better extract this to the state.
  overview: undefined
});
