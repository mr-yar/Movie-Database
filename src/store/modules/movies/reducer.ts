import {createReducer} from '@reduxjs/toolkit';
import {
  loadLastMoviesAction,
  loadNewLastMoviesAction,
  putLastMoviesAction,
  putNewLastMoviesAction
} from './actions';
import {TMovieState} from '../../../common/types';

const initialState: TMovieState = {
  movies: [],
  currentPage: 0,
  loading: false
};

export const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadLastMoviesAction, (state) => {
    state.loading = true;
  });
  builder.addCase(putLastMoviesAction, (state, action) => {
    state.movies = action.payload;
    state.currentPage = 1;
    state.loading = false;
  });
  builder.addCase(loadNewLastMoviesAction, (state, action) => {
    state.currentPage = action.payload;
    state.loading = true;
  });
  builder.addCase(putNewLastMoviesAction, (state, action) => {
    state.movies.push(...action.payload);
    state.loading = false;
  });
});
