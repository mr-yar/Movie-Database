import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {putSelectedMovieAction} from './actions';
import {API_KEY, API_BASE_URL} from '../../../services/api';

type TLoadSelectedMovieAction = {
  type: string;
  payload: number;
};

function loadSelectedMovie(value: number) {
  return axios
    .get(
      `${API_BASE_URL}/movie/${value}?api_key=${API_KEY}&append_to_response=credits,release_dates,videos`
    )
    .then((response) => response.data)
    .catch((error) => error.message);
}

function* workerLoadSelectedMovie(action: TLoadSelectedMovieAction): any {
  const data = yield call(loadSelectedMovie, action.payload);

  yield put(putSelectedMovieAction(data));
}

export function* watchLoadSelectedMovie(): Generator {
  yield takeEvery('SELECTED_MOVIE/loadSelectedMovieAction', workerLoadSelectedMovie);
}
