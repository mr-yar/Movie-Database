import {IMovie} from './IMovie';
import {ISelectedMovie} from './ISelectedMovie';

/* ACTIONS */

export interface ILoadSelectedMovieAction {
  type: string;
  payload: number;
}

export interface ISearchMovieAction {
  type: string;
  payload: string;
}

/* STATE */
export interface IMovieState {
  movies: IMovie[];
  currentPage: number;
  loading: boolean;
}
export interface ISelectedMovieState {
  selectedMovie: ISelectedMovie;
  selectedMovieId: number;
  loading: boolean;
}

export interface IMovieProps {
  movie: any;
}
