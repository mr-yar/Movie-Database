import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {API_KEY, API_START} from '../../common/api';
import {putSearchedMovieAction} from '../reducers/searchReducer';
import {ISearchMovieAction} from '../../common/types';

function loadSearcher(value: string) {
  return axios
    .get(`${API_START}/search/movie?api_key=${API_KEY}&query=${value}`)
    .then((response) => response.data)
    .then((res) => res.results);
}

function* workerSearcher(action: ISearchMovieAction) {
  const data = yield call(loadSearcher, action.payload);

  yield put(putSearchedMovieAction(data));
}

export function* watchSearcher() {
  yield takeEvery('SEARCH/searchMovieAction', workerSearcher);
}
