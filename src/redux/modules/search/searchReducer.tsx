import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TFetchedMovie, TMovie} from '../../../common/types';

const initialState = {
  query: '',
  searchedMovies: [] as TMovie[],
  loading: false
};

export const searchSlice = createSlice({
  name: 'SEARCH',
  initialState,
  reducers: {
    searchMovieAction(state, action: PayloadAction<string>) {
      state.loading = true;
      state.query = action.payload;
    },
    putSearchedMovieAction(state, action: PayloadAction<TFetchedMovie[]>) {
      state.loading = false;
      state.searchedMovies = action.payload.map((item) => ({
        backdropPath: item.backdrop_path,
        id: item.id,
        originalTitle: item.original_title,
        popularity: Math.round(item.popularity || 0),
        posterPath: item.poster_path,
        releaseDate: item.release_date,
        title: item.title,
        voteAverage: item.vote_average ?? 0,
        voteCount: item.vote_count ?? 0
      }));
    }
  }
});
export const {searchMovieAction, putSearchedMovieAction} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
