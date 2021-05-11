import {all} from 'redux-saga/effects';
import {watchLoadLastMovies} from './modules/movies/sagas';
import {watchLoadSelectedMovie} from './modules/selectedMovie/sagas';
import {watchSearcher} from './modules/search/sagas';

export function* rootWatcher(): Generator {
  yield all([watchLoadLastMovies(), watchLoadSelectedMovie(), watchSearcher()]);
}
