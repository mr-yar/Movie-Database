import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMovieState} from '../../common/Interfaces/Interfaces';
import {IMovie} from '../../common/Interfaces/IMovie';

const initialState: IMovieState = {
  movies: [],
  currentPage: 0,
  loading: false
};

const moviesSlice = createSlice({
  name: 'MOVIE',
  initialState,
  reducers: {
    loadLastMoviesAction(state) {
      state.loading = true;
    },
    putLastMoviesAction(state, action: PayloadAction<IMovie[]>) {
      state.loading = false;
      state.movies = action.payload;
      state.currentPage = 1;
    },
    loadNewLastMoviesAction(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    putNewLastMoviesAction(state, action: PayloadAction<IMovie[]>) {
      state.movies = [...state.movies, ...action.payload];
    }
  }
});

export const {
  loadLastMoviesAction,
  putLastMoviesAction,
  loadNewLastMoviesAction,
  putNewLastMoviesAction
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
