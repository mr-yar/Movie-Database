import axios from 'axios';
import {takeEvery, call, put} from 'redux-saga/effects';
import {
  putLastMoviesAction,
  putNewLastMoviesAction
} from '../reducers/moviesReducer';
import {API_KEY, API_START} from '../../common/Api';

function loadLastMovies() {
  return axios
    .get(`${API_START}/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => response.data)
    .then((res) => res.results);
}
function* workerLoadLastMovies() {
  const data = yield call(loadLastMovies);

  yield put(putLastMoviesAction(data));
}

function loadNewLastMovies(page: number) {
  return axios
    .get(`${API_START}/trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data)
    .then((res) => res.results);
}
function* workerLoadNewLastMovies(action: {type: string; payload: number}) {
  const data = yield call(loadNewLastMovies, action.payload);

  yield put(putNewLastMoviesAction(data));
}

export function* watchLoadLastMovies() {
  yield takeEvery('MOVIE/loadLastMoviesAction', workerLoadLastMovies);
  yield takeEvery('MOVIE/loadNewLastMoviesAction', workerLoadNewLastMovies);
}
