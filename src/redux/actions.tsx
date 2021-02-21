import {
  ILoadTheLastMoviesAction,
  IPutTheLastMoviesAction,
  IPutSelectedMovieAction,
  ILoadSelectedMovieAction
} from '../common/Interfaces/Interfaces';
import {IMovie} from '../common/Interfaces/IMovie';

export const PUT_THE_LAST_MOVIES = 'PUT_THE_LAST_MOVIES';
export const LOAD_THE_LAST_MOVIES = 'LOAD_THE_LAST_MOVIES';
export const LOAD_SELECTED_MOVIE = 'LOAD_SELECTED_MOVIE';
export const PUT_SELECTED_MOVIE = 'PUT_SELECTED_MOVIE';

export function loadTheLastMoviesAction(): ILoadTheLastMoviesAction {
  return {type: LOAD_THE_LAST_MOVIES};
}
export function putTheLastMoviesAction(value: IMovie[]): IPutTheLastMoviesAction {
  return {
    type: PUT_THE_LAST_MOVIES,
    payload: value
  };
}

export function loadSelectedMovieAction(value: number): ILoadSelectedMovieAction {
  return {
    type: LOAD_SELECTED_MOVIE,
    payload: value
  };
}
export function putSelectedMovieAction(
  value: Record<string, unknown>
): IPutSelectedMovieAction {
  return {
    type: PUT_SELECTED_MOVIE,
    payload: value
  };
}
