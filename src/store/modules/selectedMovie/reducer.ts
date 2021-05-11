import {createReducer} from '@reduxjs/toolkit';
import {loadSelectedMovieAction, putSelectedMovieAction} from './actions';
import {TSelectedMovieState} from './types';

const initialState: TSelectedMovieState = {
  selectedMovie: {
    backdropPath: '',
    budget: '',
    cast: [],
    crew: {director: '', directorOfPhotography: '', composer: ''},
    certification: '',
    genres: '',
    homepage: '',
    originalLanguage: '',
    originalTitle: '',
    overview: '',
    posterPath: '',
    releaseDate: '',
    revenue: '',
    runtime: '',
    tagline: '',
    title: '',
    video: '',
    voteAverage: 0,
    voteCount: 0
  },
  selectedMovieId: 0,
  loading: false
};


export const selectedMovieReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadSelectedMovieAction, (state, action) => {
    state.loading = true;
    state.selectedMovieId = action.payload;
  });
  builder.addCase(putSelectedMovieAction, (state, action) => {
    state.loading = false;
    state.selectedMovie = action.payload;
  });
});
