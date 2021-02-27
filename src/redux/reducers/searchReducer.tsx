import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovie} from '../../common/Interfaces/IMovie';

const initialState = {inputValue: '', searchedMovies: [], loading: false};

export const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    searchMovieAction(state, action: PayloadAction<string>) {
      state.loading = true;
      state.inputValue = action.payload;
    },
    putSearchedMovieAction(state, action: PayloadAction<any>) {
      state.loading = false;
      state.searchedMovies = action.payload;
    }
  }
});
export const {searchMovieAction, putSearchedMovieAction} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
