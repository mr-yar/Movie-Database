import {createReducer} from '@reduxjs/toolkit';
import {putSearchedMovieAction, searchMovieAction} from './actions';
import {TMovie} from '../../../common/types';

const initialState = {
  query: '',
  searchedMovies: [] as TMovie[],
  loading: false
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(searchMovieAction, (state, action) => {
    state.loading = true;
    state.query = action.payload;
  });
  builder.addCase(putSearchedMovieAction, (state, action) => {
    state.loading = false;
    state.searchedMovies = action.payload;
  });
});
