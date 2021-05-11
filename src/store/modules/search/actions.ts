import {createAction} from '@reduxjs/toolkit';
import {TFetchedMovie} from '../../../common/types';

export const SEARCH_MOVIE_ACTION = 'SEARCH/searchMovieAction';
export const PUT_SEARCHED_MOVIE_ACTION = 'SEARCH/putSearchedMovieAction';

export const searchMovieAction = createAction<string>(SEARCH_MOVIE_ACTION);

export const putSearchedMovieAction = createAction(
  PUT_SEARCHED_MOVIE_ACTION,
  (fetchedMovies: TFetchedMovie[]) => {
    const movies = fetchedMovies.map((item: TFetchedMovie) => ({
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
    return {payload: movies};
  }
);
