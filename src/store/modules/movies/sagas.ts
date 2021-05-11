import axios from 'axios';
import {takeEvery, call, put} from 'redux-saga/effects';
import {putLastMoviesAction, putNewLastMoviesAction} from './actions';
import {API_KEY, API_BASE_URL} from '../../../services/api';

type TLoadSelectedMovieAction = {
  type: string;
  payload: number;
};

function loadLastMovies() {
  return axios
    .get(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => response.data)
    .then((res) => res.results);
}
function* workerLoadLastMovies(): any {
  const data = yield call(loadLastMovies);

  yield put(putLastMoviesAction(data));
}

function loadNewLastMovies(page: number) {
  return axios
    .get(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data)
    .then((res) => res.results);
}

function* workerLoadNewLastMovies(action: TLoadSelectedMovieAction): any {
  const data = yield call(loadNewLastMovies, action.payload);

  yield put(putNewLastMoviesAction(data));
}

export function* watchLoadLastMovies(): Generator {
  yield takeEvery('MOVIE/loadLastMoviesAction', workerLoadLastMovies);
  yield takeEvery('MOVIE/loadNewLastMoviesAction', workerLoadNewLastMovies);
}
