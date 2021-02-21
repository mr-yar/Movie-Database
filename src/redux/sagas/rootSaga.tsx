import {all} from 'redux-saga/effects';
import {watchLoadTheLastMovies} from './theLastMoviesSaga';
import {watchLoadSelectedMovieBox} from './selectedMovieBoxSaga';

export function* rootWatcher() {
  yield all([watchLoadTheLastMovies(), watchLoadSelectedMovieBox()]);
}
