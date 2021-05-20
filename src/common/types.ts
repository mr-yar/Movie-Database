export type IconProps = {isActive?: boolean};

export type TMovieProps = {
  movie: TSelectedMovie;
};

export type TMovie = {
  backdropPath: string;
  id: number;
  originalTitle: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
};

export type TSelectedMovie = {
  backdropPath: string;
  budget: string;
  cast: {id: number; name: string; character: string}[];
  crew: {director: string; directorOfPhotography: string; composer: string};
  certification: string;
  genres: string;
  homepage: string;
  id?: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  revenue: string;
  runtime: string;
  tagline: string;
  title: string;
  video: string;
  voteAverage: number;
  voteCount: number;
};

export type TFetchedMovie = {
  adult: boolean | null;
  backdrop_path: string;
  genre_ids: number[] | [];
  original_language: string;
  original_title: string;
  poster_path: string;
  id: number;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;
  overview: string;
  release_date: string;
  title: string;
  popularity: number | null;
  media_type: string;
};
