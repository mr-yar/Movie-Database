import {all} from 'redux-saga/effects';
import {watchLoadLastMovies} from './modules/movies/moviesSaga';
import {watchLoadSelectedMovie} from './modules/selectedMovie/selectedMovieSaga';
import {watchSearcher} from './modules/search/searchSaga';

export function* rootWatcher(): Generator {
  yield all([watchLoadLastMovies(), watchLoadSelectedMovie(), watchSearcher()]);
}
