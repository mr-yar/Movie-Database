export interface TFetchedMovie {
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
}
export interface TMovie {
  backdropPath: string;
  id: number;
  originalTitle: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
}

export interface ILoadSelectedMovieAction {
  type: string;
  payload: number;
}

export interface ISearchMovieAction {
  type: string;
  payload: string;
}

/* STATE */
export type TMovieState = {
  movies: TMovie[];
  currentPage: number;
  loading: boolean;
};

export type TSelectedMovieState = {
  selectedMovie: TSelectedMovie;
  selectedMovieId: number;
  loading: boolean;
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

export interface IMovieProps {
  movie: any;
}

export type TFetchedSelectedMovie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | string;
  budget: number;
  genres: TFetchedGenre[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TFetchedProductionCompany[];
  production_countries: TFetchedProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TFetchedSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: TFetchedCredits;
  release_dates: TFetchedReleaseDates;
  videos: TFetchedVideos;
};

export type IconProps = {size?: string; isActive?: boolean};

export interface TFetchedGenre {
  id?: number;
  name?: string;
}

export interface TFetchedProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface TFetchedProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface TFetchedSpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

export interface TFetchedCredits {
  cast: TFetchedCast[];
  crew: TFetchedCrew[];
}

export interface TFetchedCast {
  id: number;
  name: string;
  character: string;
}
export interface TCast {
  id: number;
  name: string;
  role: string;
}
export interface TFetchedCrew {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  credit_id?: string;
  department?: string;
  job: string;
}

export interface TFetchedReleaseDates {
  results: TFetchedResult[];
}

export interface TFetchedResult {
  iso_3166_1: string;
  release_dates: TFetchedReleaseDate[];
}

export interface TFetchedReleaseDate {
  certification: string;
  iso_639_1: string;
  note?: string;
  release_date?: string;
  type?: number;
}

export interface TFetchedVideos {
  results: TFetchedResult2[];
}

export interface TFetchedResult2 {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key: string;
  name: string;
  site: string;
  size?: number;
  type?: string;
}
