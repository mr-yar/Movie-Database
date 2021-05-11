import {createAction} from '@reduxjs/toolkit';
import {TFetchedMovie} from '../../../common/types';

const LOAD_LAST_MOVIE_ACTION = 'MOVIE/loadLastMoviesAction';
const PUT_LAST_MOVIE_ACTION = 'MOVIE/putLastMoviesAction';
const LOAD_NEW_LAST_MOVIE_ACTION = 'MOVIE/loadNewLastMoviesAction';
const PUT_NEW_LAST_MOVIE_ACTION = 'MOVIE/putNewLastMoviesAction';

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

export const loadLastMoviesAction = createAction(LOAD_LAST_MOVIE_ACTION);

export const putLastMoviesAction = createAction(
  PUT_LAST_MOVIE_ACTION,
  (movies: TFetchedMovie[]) => {
    const normalizedMovies = movies.map((item: TFetchedMovie) => normalizedMovie(item));
    return {payload: normalizedMovies};
  }
);

export const loadNewLastMoviesAction = createAction<number>(LOAD_NEW_LAST_MOVIE_ACTION);

export const putNewLastMoviesAction = createAction(
  PUT_NEW_LAST_MOVIE_ACTION,
  (movies: TFetchedMovie[]) => {
    const normalizedMovies = movies.map((item: TFetchedMovie) => normalizedMovie(item));
    return {payload: normalizedMovies};
  }
);
