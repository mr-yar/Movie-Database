import {call, put, takeEvery} from 'redux-saga/effects';
import {LOAD_SELECTED_MOVIE, putSelectedMovieAction} from '../actions';
import {API_KEY, API_START} from '../../common/Api';
import {ILoadSelectedMovieAction} from '../../common/Interfaces/Interfaces';

function LoadSelectedMovieBox(value: number) {
  return fetch(
    `${API_START}/movie/${value}?api_key=${API_KEY}&append_to_response=credits,release_dates,videos`
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(`${response.status}`);
  });
}

function* workerLoadSelectedMovieBox(action: ILoadSelectedMovieAction) {
  const data = yield call(LoadSelectedMovieBox, action.payload);

  yield put(putSelectedMovieAction(data));
}

export function* watchLoadSelectedMovieBox() {
  yield takeEvery(LOAD_SELECTED_MOVIE, workerLoadSelectedMovieBox);
}
