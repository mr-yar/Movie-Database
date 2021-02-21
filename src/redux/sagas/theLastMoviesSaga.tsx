import {takeEvery, call, put} from 'redux-saga/effects';
import {LOAD_THE_LAST_MOVIES, putTheLastMoviesAction} from '../actions';
import {API_KEY, API_START} from '../../common/Api';

function loadTheLastMovies() {
  return fetch(`${API_START}/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(`${response.status}`);
    })
    .then((res) => res.results);
}

function* workerLoadTheLastMovies() {
  const data = yield call(loadTheLastMovies);
  yield put(putTheLastMoviesAction(data));
}

export function* watchLoadTheLastMovies() {
  yield takeEvery(LOAD_THE_LAST_MOVIES, workerLoadTheLastMovies);
}
