import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {API_KEY, API_BASE_URL} from '../../services/api';
import {putSelectedMovieAction} from '../reducers/selectedMovieReducer';
import {ILoadSelectedMovieAction} from '../../common/types';


function LoadSelectedMovieBox(value: number) {
  return axios
    .get(
      `${API_BASE_URL}/movie/${value}?api_key=${API_KEY}&append_to_response=credits,release_dates,videos`
    )
    .then((response) => response.data)
    .catch((error) => error.message);
}

function* workerLoadSelectedMovieBox(action: ILoadSelectedMovieAction) {
  const data = yield call(LoadSelectedMovieBox, action.payload);

  yield put(putSelectedMovieAction(data));
}

export function* watchLoadSelectedMovieBox() {
  yield takeEvery('SELECTED_MOVIE/loadSelectedMovieAction', workerLoadSelectedMovieBox);
}
