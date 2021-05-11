import {TSelectedMovie} from '../../../common/types';

export type TSelectedMovieState = {
  selectedMovie: TSelectedMovie;
  selectedMovieId: number;
  loading: boolean;
};

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

export type TFetchedGenre = {
  id?: number;
  name?: string;
};

export type TFetchedProductionCompany = {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};

export type TFetchedProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};

export type TFetchedSpokenLanguage = {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
};

export type TFetchedCredits = {
  cast: TFetchedCast[];
  crew: TFetchedCrew[];
};

export type TFetchedCast = {
  id: number;
  name: string;
  character: string;
};

export type TFetchedCrew = {
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
};

export type TFetchedReleaseDates = {
  results: TFetchedReleaseDateResult[];
};

export type TFetchedReleaseDateResult = {
  iso_3166_1: string;
  release_dates: TFetchedReleaseDate[];
};

export type TFetchedReleaseDate = {
  certification: string;
  iso_639_1: string;
  note?: string;
  release_date?: string;
  type?: number;
};

export type TFetchedVideos = {
  results: TFetchedVideoResult[];
};

export type TFetchedVideoResult = {
  id?: string;
  iso_639_1?: string;
  iso_3166_1?: string;
  key: string;
  name: string;
  site: string;
  size?: number;
  type?: string;
};
