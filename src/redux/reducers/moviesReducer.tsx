import {PUT_THE_LAST_MOVIES, LOAD_THE_LAST_MOVIES} from '../actions';
import {IMovieState} from '../../common/Interfaces/Interfaces';
import {IMovie} from '../../common/Interfaces/IMovie';

const defaultState: IMovieState = {
  movies: [],
  loading: false
};

export function moviesReducer(
  state = defaultState,
  action: {type: string; payload: IMovie[]}
): IMovieState {
  switch (action.type) {
    case LOAD_THE_LAST_MOVIES:
      return {
        ...state,
        loading: true
      };
    case PUT_THE_LAST_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
