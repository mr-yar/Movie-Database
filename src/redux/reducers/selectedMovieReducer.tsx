import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISelectedMovieState} from '../../common/types';

const initialState: ISelectedMovieState = {
  selectedMovie: {},
  selectedMovieId: 0,
  loading: false
};

export const selectedMovieSlice = createSlice({
  name: 'SELECTED_MOVIE',
  initialState,
  reducers: {
    loadSelectedMovieAction(state, action: PayloadAction<number>) {
      state.loading = true;
      state.selectedMovieId = action.payload;
    },
    putSelectedMovieAction(state, action: PayloadAction<Record<string, unknown>>) {
      state.loading = false;
      state.selectedMovie = action.payload;
    }
  }
});

export const {
  loadSelectedMovieAction,
  putSelectedMovieAction
} = selectedMovieSlice.actions;
export const selectedMovieReducer = selectedMovieSlice.reducer;
