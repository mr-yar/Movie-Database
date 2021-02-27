import {all} from 'redux-saga/effects';
import {watchLoadLastMovies} from './theLastMoviesSaga';
import {watchLoadSelectedMovieBox} from './selectedMovieBoxSaga';
import {watchSearcher} from './searchSaga';

export function* rootWatcher() {
  yield all([
    watchLoadLastMovies(),
    watchLoadSelectedMovieBox(),
    watchSearcher()
  ]);
}
