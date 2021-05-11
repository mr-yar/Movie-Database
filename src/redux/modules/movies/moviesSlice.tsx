import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TFetchedMovie, TMovieState} from '../../../common/types';

const initialState: TMovieState = {
  movies: [],
  moviesID: [],
  currentPage: 0,
  loading: false
};

const normalizedMovie = (item: TFetchedMovie) => ({
  backdropPath: item.backdrop_path,
  id: item.id,
  originalTitle: item.original_title,
  popularity: Math.round(item.popularity || 0),
  posterPath: item.poster_path,
  releaseDate: item.release_date,
  title: item.title,
  voteAverage: item.vote_average ?? 0,
  voteCount: item.vote_count ?? 0
});

const moviesSlice = createSlice({
  name: 'MOVIE',
  initialState,
  reducers: {
    loadLastMoviesAction(state) {
      state.loading = true;
    },
    putLastMoviesAction(state, action: PayloadAction<TFetchedMovie[]>) {
      state.loading = false;

      state.movies = action.payload.map((item) => normalizedMovie(item));

      state.currentPage = 1;
    },
    loadNewLastMoviesAction(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      state.loading = true;
    },
    putNewLastMoviesAction(state, action: PayloadAction<TFetchedMovie[]>) {
      state.movies.push(...action.payload.map((item) => normalizedMovie(item)));
      state.loading = false;
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
