import {createAction} from '@reduxjs/toolkit';
import ISO6391 from 'iso-639-1';
import {TFetchedCrew, TFetchedResult, TFetchedSelectedMovie} from '../../../common/types';

const LOAD_SELECTED_MOVIE_ACTION = 'SELECTED_MOVIE/loadSelectedMovieAction';
const PUT_SELECTED_MOVIE_ACTION = 'SELECTED_MOVIE/putSelectedMovieAction';

export const loadSelectedMovieAction = createAction<number>(LOAD_SELECTED_MOVIE_ACTION);

export const putSelectedMovieAction = createAction(
  PUT_SELECTED_MOVIE_ACTION,
  (movie: TFetchedSelectedMovie) => {
    const director = movie.credits.crew.find((item: TFetchedCrew) => item.job === 'Director');
    const directorName = director ? director.name : 'Unknown';

    const directorOfPhotography = movie.credits.crew.find(
      (item: TFetchedCrew) => item.job === 'Director of Photography'
    );
    const directorOfPhotographyName = directorOfPhotography
      ? directorOfPhotography.name
      : 'Unknown';

    const composer = movie.credits.crew.find(
      (item: TFetchedCrew) => item.job === 'Original Music Composer'
    );
    const composerName = composer ? composer.name : 'Unknown';

    const ageRank = movie.release_dates.results.find(
      (item: TFetchedResult) => item.iso_3166_1 === 'US'
    );
    const certification = ageRank ? ageRank.release_dates[0].certification : 'NR';

    const selectedMovie = {
      backdropPath: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
      budget: (Math.round(movie.budget) || 'Unknown').toString(),
      cast: [
        {
          id: 0,
          name: movie.credits.cast[0].name ?? '',
          character: movie.credits.cast[0].character ?? ''
        },
        {
          id: 1,
          name: movie.credits.cast[1].name ?? '',
          character: movie.credits.cast[1].character ?? ''
        },
        {
          id: 2,
          name: movie.credits.cast[2].name ?? '',
          character: movie.credits.cast[2].character ?? ''
        },
        {
          id: 3,
          name: movie.credits.cast[3].name ?? '',
          character: movie.credits.cast[3].character ?? ''
        },
        {
          id: 4,
          name: movie.credits.cast[4].name ?? '',
          character: movie.credits.cast[4].character ?? ''
        }
      ],
      crew: {
        director: directorName,
        directorOfPhotography: directorOfPhotographyName,
        composer: composerName
      },
      certification,
      genres: movie.genres[0].name ?? `${movie.genres[1].name}` ?? '',
      homepage: movie.homepage,
      id: movie.id,
      originalLanguage: ISO6391.getName(movie.original_language),
      originalTitle: movie.original_title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      revenue: (Math.round(movie.revenue) || 'Unknown').toString(),
      runtime: movie.runtime.toString(),
      tagline: movie.tagline,
      title: movie.title,
      video: `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`,
      voteAverage: movie.vote_average ?? 0,
      voteCount: movie.vote_count ?? 0
    };

    return {payload: selectedMovie};
  }
);
