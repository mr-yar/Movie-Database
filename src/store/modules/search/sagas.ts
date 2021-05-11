import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {putSearchedMovieAction} from './actions';
import {API_KEY, API_BASE_URL} from '../../../services/api';

type TSearchMovieAction = {
  type: string;
  payload: string;
};

function loadSearcher(value: string) {
  return axios
    .get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`)
    .then((response) => response.data)
    .then((res) => res.results);
}

function* workerSearcher(action: TSearchMovieAction): any {
  const data = yield call(loadSearcher, action.payload);

  yield put(putSearchedMovieAction(data));
}

export function* watchSearcher(): Generator {
  yield takeEvery('SEARCH/searchMovieAction', workerSearcher);
}
