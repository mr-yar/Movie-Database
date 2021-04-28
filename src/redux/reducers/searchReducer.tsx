import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '../../common/types';

const initialState = {
  inputValue: '',
  searchedMovies: [] as IMovie[],
  loading: false
};

export const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    searchMovieAction(state, action: PayloadAction<string>) {
      state.loading = true;
      state.inputValue = action.payload;
    },
    putSearchedMovieAction(state, action: PayloadAction<IMovie[]>) {
      state.loading = false;
      state.searchedMovies = action.payload;
    }
  }
});
export const {searchMovieAction, putSearchedMovieAction} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
