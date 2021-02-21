import {PUT_SELECTED_MOVIE, LOAD_SELECTED_MOVIE} from '../actions';
import {ISelectedMovieState} from '../../common/Interfaces/Interfaces';
import {ISelectedMovie} from '../../common/Interfaces/ISelectedMovie';

const initialState: ISelectedMovieState = {
  selectedMovie: {},
  loading: false
};

export function selectedMovieReducer(
  state = initialState,
  action: {type: string; payload: ISelectedMovie}
): any {
  switch (action.type) {
    case LOAD_SELECTED_MOVIE:
      return {
        ...state,
        loading: true
      };
    case PUT_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
