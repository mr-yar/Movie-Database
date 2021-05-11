import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {API_KEY, API_BASE_URL} from '../../../services/api';
import {putSearchedMovieAction} from './actions';
import {ISearchMovieAction} from '../../../common/types';

function loadSearcher(value: string) {
  return axios
    .get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}`)
    .then((response) => response.data)
    .then((res) => res.results);
}

function* workerSearcher(action: ISearchMovieAction): any {
  const data = yield call(loadSearcher, action.payload);

  yield put(putSearchedMovieAction(data));
}

export function* watchSearcher(): Generator {
  yield takeEvery('SEARCH/searchMovieAction', workerSearcher);
}
