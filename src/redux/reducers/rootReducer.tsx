import {combineReducers} from 'redux';
import {moviesReducer} from './moviesReducer';
import {selectedMovieReducer} from './selectedMovieReducer';

export const rootReducer = combineReducers({
  moviesReducer,
  selectedMovieBoxReducer: selectedMovieReducer
});
export type RootState = ReturnType<typeof rootReducer>;
