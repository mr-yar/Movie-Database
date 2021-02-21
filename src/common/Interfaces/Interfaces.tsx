import {IMovie} from './IMovie';

/* ACTIONS */

export interface ILoadTheLastMoviesAction {
  type: string;
}
export interface IPutTheLastMoviesAction {
  type: string;
  payload: IMovie[];
}

export interface ILoadSelectedMovieAction {
  type: string;
  payload: number;
}
export interface IPutSelectedMovieAction {
  type: string;
  payload: Record<string, unknown>;
}

/* State */
export interface IMovieState {
  movies: IMovie[];
  loading: boolean;
}
export interface ISelectedMovieState {
  selectedMovie: Record<string, unknown>;
  loading: boolean;
}
